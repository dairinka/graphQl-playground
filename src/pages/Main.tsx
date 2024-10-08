import { FC, useEffect, Suspense, lazy, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { FormattedMessage } from 'react-intl';

import { auth } from '../firebase';
import { SchemaData, Type } from '../types/types';
import { defaultSchemaObj } from '../providers/AppProviders';

import getSchema from '../utils/getSchema';
import useAppContext from '../hooks/useAppContext';
import QueryBlock from '../components/main/QueryBlock';
import EditorBlock from '../components/main/EditorBlock';
import ResponseBlock from '../components/main/ResponseBlock';
import ControlButtons from '../components/main/ControlButtons';

const SchemaBlock = lazy(() => import('../components/main/Schema/SchemaBlock'));

const Main: FC = (): JSX.Element => {
  const [user, loading] = useAuthState(auth);
  const [width, setWidth] = useState(window.innerWidth);

  const navigate = useNavigate();
  const responseRef = useRef<HTMLElement | null>(null);
  const { userName, setSchema, setSchemaData, schema } = useAppContext();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!loading && !user) navigate('/');
    const getDocs = async () => {
      const { data } = (await getSchema()) as SchemaData;
      const queries = data.__schema.types.find(
        (el: { name: string }) => el.name === 'Query'
      ) as Type;

      setSchemaData(data.__schema);
      setSchema(() => (queries.fields ? queries.fields : [defaultSchemaObj]));
    };

    if (user && schema[0] === defaultSchemaObj) {
      getDocs();
    }
  }, [user, navigate, loading, schema, setSchema, setSchemaData]);

  const executeScroll = () => {
    width < 640 && responseRef.current?.scrollIntoView();
  };

  return (
    <>
      <div className="mt-[80px] h-[40px] w-full bg-green py-2 text-white">
        <p className="text-center">
          <FormattedMessage id="HELLO" />, &nbsp;
          {user?.displayName ? String(user.displayName) : String(userName)}!
        </p>
      </div>
      <main className="relative z-0 min-h-[calc(100vh-120px)] w-full overflow-hidden bg-dark-blue sm:h-[calc(100vh-120px)] 2xl:h-[600px] 2xl:min-h-[600px]">
        <article className="relative flex flex-col sm:flex-row">
          <div className="relative grid h-[calc(100vh-120px)] grid-cols-[80%_20%] grid-rows-[auto_auto] pt-[20px] transition-all sm:h-[calc(100vh-120px)] sm:w-1/2 sm:min-w-[50%] sm:grid-cols-[85%_15%] md:grid-cols-[90%_10%] 2xl:h-[600px]">
            <EditorBlock />
            <ControlButtons toScroll={executeScroll} />
            <div className="relative z-10 col-span-2 col-start-1 row-start-2 flex grow flex-col self-end">
              <QueryBlock />
            </div>
          </div>
          <ResponseBlock ref={responseRef} />
          <Suspense fallback={null}>
            <SchemaBlock />
          </Suspense>
        </article>
      </main>
    </>
  );
};

export default Main;
