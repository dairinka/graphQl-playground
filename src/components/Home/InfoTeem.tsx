import { FormattedMessage } from 'react-intl';

const InfoTeem = () => {
  return (
    <section className="mt-12 flex flex-col rounded-[10px] bg-query p-6 text-dark-blue">
      <h2 className="font-semibold-400 mb-[20px] text-[24px] md:mb-[40px]">
        <FormattedMessage id="TEAM_MEET" />
      </h2>
      <div className="grid grid-rows-1 items-start md:grid-cols-3">
        <section className="mb-2 flex flex-col items-center justify-center md:mb-4">
          <div className="h-[155px] w-[165px] rounded-[10px] bg-[url('./Artsem.jpeg')] bg-cover bg-center bg-no-repeat "></div>
          <h3 className="mt-1 text-center font-semibold md:mt-2 md:h-[48px] lg:h-auto">
            <FormattedMessage id="ARTEM_ROLE" />
          </h3>
          <h4 className="mt-1 text-center font-semibold md:mt-2">
            <FormattedMessage id="ARTEM_NAME" />
          </h4>
          <p className="mt-1 text-justify md:mt-2">
            <FormattedMessage id="ARTEM_INFO" />
          </p>
        </section>
        <section className="mb-2 flex flex-col items-center md:mb-4 md:ml-4">
          <div className="h-[155px] w-[165px] rounded-[10px] bg-[url('./Iryna.jpg')] bg-cover bg-center bg-no-repeat "></div>
          <h3 className="mt-1 text-center font-semibold md:mt-2">
            <FormattedMessage id="IRYNA_ROLE" />
          </h3>
          <h4 className="mt-1 text-center font-semibold md:mt-2">
            <FormattedMessage id="IRYNA_NAME" />
          </h4>
          <p className="mt-1 text-justify md:mt-2">
            <FormattedMessage id="IRYNA_INFO" />
          </p>
        </section>
        <section className="flex flex-col items-center justify-center md:mb-4 md:ml-4">
          <div className="h-[155px] w-[165px] rounded-[10px] bg-[url('./Masha.jpg')] bg-cover bg-center bg-no-repeat "></div>
          <h3 className="mt-1 text-center font-semibold md:mt-2 md:h-[48px] lg:h-auto">
            <FormattedMessage id="MASHA_ROLE" />
          </h3>
          <h4 className="mt-1 text-center font-semibold md:mt-2">
            <FormattedMessage id="MASHA_NAME" />
          </h4>
          <p className="mt-1 text-justify md:mt-2">
            <FormattedMessage id="MASHA_INFO" />
          </p>
        </section>
      </div>
    </section>
  );
};
export default InfoTeem;
