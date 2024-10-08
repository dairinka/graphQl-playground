import { FormattedMessage } from 'react-intl';

import { useState } from 'react';

import Arrow from '../../assets/svg/arrow.svg';

import CodeHelp from './CodeHelp';

const InfoHelp = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="mt-12 w-full rounded-[10px] bg-query-shadow p-6">
      <img
        className="hidden w-full rounded-[10px] sm:inline-block"
        src="./example.png"
        alt="example"
      />
      <h2 className="font-semibold-400 mt-[35px] text-[20px]">
        <FormattedMessage id="INTRO_HELP1" />
      </h2>
      <div className="mt-[25px] flex flex-col justify-between md:flex-row md:items-start">
        <div
          className="mb-[25px] flex flex-row items-center gap-2 text-[#a9f779]"
          onClick={() => {
            setClick(!click);
          }}
        >
          <div className={click ? '' : '-rotate-90'}>
            <Arrow />
          </div>
          <p className={click ? 'underline' : 'no-underline '}>
            <FormattedMessage id="INTRO_HELP2" />
          </p>
        </div>
        {click && <CodeHelp />}
      </div>
    </div>
  );
};
export default InfoHelp;
