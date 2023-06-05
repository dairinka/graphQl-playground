import { FC } from 'react';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import Github from '../assets/svg/github.svg';
import RSLogo from '../assets/svg/rsschool.svg';
import Graph from '../assets/svg/graph.svg';

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="inline-block h-full w-full bg-dark-blue">
      <div className="h-[3.75rem] bg-gray" />
      <div className="mx-auto flex h-[20rem] items-center justify-center overflow-hidden px-4 sm:gap-x-[20%] md:gap-x-[8%] lg:h-[25rem] lg:px-0">
        <div className="z-0 -mb-[223px] -ml-[447px] hidden h-[341px] w-[384px] rotate-180 bg-[url('./element_1.png')] bg-[length:341px_258px] bg-no-repeat opacity-50 md:inline-block lg:-mb-[324px] lg:-ml-[500px] lg:h-[463px] lg:w-[539px] lg:bg-auto" />
        <ul className="relative inline-block content-center text-white">
          <div className="flex flex-col items-start">
            <h2 className="relative font-Impact text-[25px] font-normal lg:text-[32px]">
              <FormattedMessage id="TEAM" />
            </h2>
            <hr className="h-[2px] w-[135px] text-green" />
          </div>
          <li className=" li group relative flex items-start rounded-lg py-2 hover:text-green">
            <Link
              className="flex items-center justify-center gap-x-2.5 transition-all"
              to="https://github.com/mada-web"
            >
              <Github />
              mada-web
            </Link>
          </li>
          <li className="li relative flex items-start py-2 hover:text-green">
            <Link
              className="flex items-center justify-center gap-x-2.5 fill-current transition-all"
              to="https://github.com/dairinka"
            >
              <Github />
              dairinka
            </Link>
          </li>
          <li className="li relative flex items-start py-2 hover:text-green">
            <Link
              className="flex items-center justify-center gap-x-2.5 transition-all"
              to="https://github.com/Mary190183/"
            >
              <Github />
              Mary190183
            </Link>
          </li>
        </ul>
        <div className="z-0 -mr-[250px] -mt-[243px] hidden h-[341px] w-[384px] bg-[url('./element_1.png')] bg-[length:341px_258px] bg-no-repeat opacity-50 md:inline-block lg:-mt-[324px] lg:h-[463px] lg:w-[539px] lg:bg-auto" />
        <img
          className="z-10 hidden w-[230px] sm:inline-block lg:w-[280px]"
          src="./Bazz.png"
          alt="Bazz"
        />
      </div>
      <div className="h-[3.61rem] w-full bg-green">
        <ul className="mx-auto flex h-full w-[95%] max-w-7xl items-center justify-between p-2">
          <li className="person relative flex items-center gap-x-6 transition-all">
            <Link
              className="white flex items-center justify-center transition-all"
              to="https://rs.school/react/ "
            >
              <RSLogo />
            </Link>
          </li>
          <Graph />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
