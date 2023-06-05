import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const NotFound: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate('/');
  };

  return (
    <article className="flex h-screen w-screen items-center bg-dark-blue">
      <div className="bg-content inset-x-0 mx-5 grid h-[500px] max-w-[1400px] grow grid-cols-3  grid-rows-[200px_auto_140px]  bg-center bg-no-repeat text-white sm:bg-[url('./bg_404.png')] sm:bg-[length:700px_450px] xl:mx-auto xl:mt-[50vh] xl:h-[600px] xl:-translate-y-1/2">
        <div className="col-span-3 col-start-1 row-start-2 self-center text-center sm:col-start-3 sm:row-start-1">
          <h1 className="font-Impact text-7xl font-bold tracking-wider">404</h1>
          <h2 className="mt-4 font-sans text-2xl font-bold">
            <FormattedMessage id="PAGE_NOT_FOUND" />
          </h2>
        </div>
        <div className="col-span-3 row-start-3 grid grid-cols-3 items-center self-center">
          <span className="hidden justify-self-center sm:inline-block">
            <FormattedMessage id="WENT_WRONG" />
          </span>
          <button
            className="col-span-3 justify-self-center rounded-md bg-green px-16 py-3 sm:col-span-1 "
            onClick={routeChange}
          >
            <FormattedMessage id="HOME_PAGE" />
          </button>
        </div>
      </div>
    </article>
  );
};
export default NotFound;
