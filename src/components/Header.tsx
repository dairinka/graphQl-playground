import { FC, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { auth, logout } from '../firebase';
import { LOCALES } from '../lang/locales';

import Logo from '../assets/svg/logo.svg';
import BurgerMenu from '../assets/svg/burger.svg';

import useAppContext from '../hooks/useAppContext';

import Burger from './Burger';

const Header: FC = (): JSX.Element => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [click, setClick] = useState(false);

  const { currentLocale, handleLocale } = useAppContext();

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 10) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  const handleClosing = () => {
    setClick(false);
  };

  return (
    <>
      <header
        className={`fixed left-[50%] top-0  z-20 h-[80px] w-full max-w-[1400px] -translate-x-2/4 p-4 transition-all duration-200 ${
          animateHeader ? 'bg-green text-dark-blue' : 'bg-gray'
        }`}
      >
        <ul className="mx-auto flex max-w-[1400px] list-none items-center justify-between">
          <li className="white relative flex items-center gap-x-6 leading-6">
            <Link
              className="font-semibold-400 flex items-center justify-center gap-x-2.5 font-Impact text-[32px] text-dark-blue transition-all hover:text-white"
              to="/"
            >
              <Logo />
              GraphiQL
            </Link>
          </li>
          <span
            className="sm:hidden"
            onClick={() => {
              setClick(!click);
            }}
          >
            <BurgerMenu />
          </span>
          <li className="relative hidden flex-row items-center gap-8 sm:flex">
            {!user && !loading && (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-2 px-3 font-semibold leading-7 text-white'
                      : 'border-b-2 border-transparent px-3 font-semibold leading-7 text-dark-blue transition-all hover:border-black'
                  }
                  to="sign-in"
                >
                  <FormattedMessage id="SIGN_IN" />
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-2 px-3 font-semibold leading-7 text-white'
                      : 'border-b-2 border-transparent px-3 font-semibold leading-7 text-dark-blue transition-all hover:border-black'
                  }
                  to="sign-up"
                >
                  <FormattedMessage id="SIGN_UP" />
                </NavLink>
              </>
            )}
            {user && !loading && (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-2 px-3 font-semibold leading-7 text-white'
                      : 'border-b-2 border-transparent px-3 font-semibold leading-7 text-dark-blue transition-all hover:border-black'
                  }
                  to="/main"
                >
                  <FormattedMessage id="MAIN" />
                </NavLink>
                <Link
                  className="border-b-2 border-transparent px-3 font-semibold leading-7 text-dark-blue transition-all hover:border-b-2 hover:border-black"
                  onClick={logout}
                  to={'/'}
                >
                  <FormattedMessage id="LOG_OUT" />
                </Link>
              </>
            )}
            <div className="flex items-center px-3 py-2.5 text-dark-blue">
              <span className="mr-3 font-semibold ">En</span>
              <label
                htmlFor="lang"
                className="relative h-6 w-10 cursor-pointer rounded-full bg-dark-blue py-2"
              >
                <input
                  type="checkbox"
                  id="lang"
                  className="peer sr-only"
                  checked={currentLocale !== LOCALES.ENGLISH}
                  onChange={(e) => handleLocale(e)}
                />
                <span className="peer absolute left-1 top-1 h-4 w-4 rounded-full bg-green transition-all duration-200 peer-checked:left-5" />
              </label>
              <span className="ml-3 font-semibold">Ua</span>
            </div>
          </li>
        </ul>
      </header>
      {click && <Burger onClose={handleClosing} />}
    </>
  );
};

export default Header;
