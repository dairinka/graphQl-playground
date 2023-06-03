import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

const Layout: FC = (): JSX.Element => {
  return (
    <div className="outer-wrap">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
