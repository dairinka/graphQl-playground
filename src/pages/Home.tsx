import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';

import PokeApiLogo from '../assets/svg/poke-api-logo.svg';

import { Background } from '../components/Background';
import InfoTeem from '../components/Home/InfoTeem';
import InfoReact from '../components/Home/InfoReact';
import InfoPokeApi from '../components/Home/InfoPokeApi';
import InfoHelp from '../components/Home/InfoHelp';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative flex min-h-max w-full bg-dark-blue">
      <Background />
      <section className="relative z-10 mx-auto my-[28px] flex w-3/4 flex-col items-center">
        <div className="-mx-[20px] flex flex-col text-[20px] text-white">
          <p className="-mb-[30px] ml-6 mt-[100px] text-lg sm:text-xl">
            <FormattedMessage id="PLAYGROUND" />
          </p>
          <PokeApiLogo className="w-[250px] sm:w-[315px]" />
        </div>
        <InfoPokeApi />
        <InfoHelp />
        <InfoReact />
        <InfoTeem />
      </section>
    </main>
  );
};
export default Home;
