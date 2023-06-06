import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const NotFound: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const routeChange = () => {
    navigate('/');
  };

  return (
    <article className="page absolute top-0 h-screen w-screen bg-dark-blue">
      <div className="page-bg absolute top-0 z-0 h-[50vh] w-screen bg-gray"></div>
      <div className="page-block relative z-10 mx-auto mt-10 h-[500px] w-screen md:mt-[50vh] md:-translate-y-1/2 lg:w-[1000px] xl:h-[600px]">
        <div className="page-block-content bg-content mx-5 flex h-full w-full grow flex-col items-center bg-left bg-no-repeat text-dark-blue sm:items-end sm:bg-[url('./bg_404.png')] sm:bg-[length:500px_300px] md:bg-[length:600px_400px] lg:bg-[length:700px_450px]">
          <div className="page-block-header w-[300px] text-center sm:mr-20">
            <h1 className="page-block-h1 font-Impact text-5xl font-bold tracking-wider md:text-7xl lg:text-8xl">
              404
            </h1>
            <h2 className="page-block-h2 mt-4 font-sans text-base font-bold lg:text-2xl">
              <FormattedMessage id="PAGE_NOT_FOUND" />
            </h2>
          </div>
          <div className="page-block-btn mt-10 w-[300px] text-center">
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
