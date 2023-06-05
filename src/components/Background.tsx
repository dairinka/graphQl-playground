import { FC } from 'react';

export const Background: FC = (): JSX.Element => {
  return (
    <div className="absolute hidden min-h-full w-full items-stretch justify-between overflow-hidden md:flex">
      <div className="relative -ml-[440px]  mt-[500px] h-[463px] w-[539px] rotate-180 place-self-start bg-[url('./element_1.png')] bg-[length:341px_258px] bg-no-repeat opacity-50 lg:-ml-[375px] lg:bg-auto" />
      <div className="relative -mr-[440px] -mt-[47px] h-[463px] w-[539px] place-self-start bg-[url('./element_1.png')] bg-[length:341px_258px] bg-no-repeat opacity-50 lg:-mr-[375px] lg:bg-auto" />
    </div>
  );
};
