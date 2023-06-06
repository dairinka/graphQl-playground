import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const NotFound: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate('/');
  };

  return (
    <article className="absolute top-0 h-screen w-screen bg-dark-blue">
      <div className="absolute top-0 z-0 h-[50vh] w-screen bg-gray"></div>
      <div className="relative z-10 mx-auto mt-10 h-[500px] w-screen md:mt-[50vh] md:-translate-y-1/2 lg:w-[1000px] xl:h-[600px]">
        <div className="bg-content mx-5 flex h-full w-full grow flex-col items-center bg-left bg-no-repeat text-dark-blue sm:items-end sm:bg-[url('./bg_404.png')] sm:bg-[length:500px_300px] md:bg-[length:600px_400px] lg:bg-[length:700px_450px]">
          <div className="text-center sm:mr-20">
            <h1 className="font-Impact text-5xl font-bold tracking-wider md:text-7xl lg:text-8xl">
              404
            </h1>
            <h2 className="mt-4 font-sans text-base font-bold lg:text-2xl">
              <FormattedMessage id="PAGE_NOT_FOUND" />
            </h2>
          </div>
          <div className="mt-10 text-center sm:mr-[4rem] lg:mr-[5.5rem] xl:mr-[7rem]">
            <button
              className="rounded-md bg-green px-16 py-3 font-sans text-base hover:brightness-110 lg:text-2xl"
              onClick={routeChange}
            >
              <FormattedMessage id="HOME_PAGE" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
export default NotFound;