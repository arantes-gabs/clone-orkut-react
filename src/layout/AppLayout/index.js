import Header from 'components/Header';
import React from 'react';
import './app-layout.scss';
import { Button } from '@material-ui/core';

const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />

      <main className="app-layout__content">{children}</main>

      <Button color="primary">Hello World</Button>
    </div>
  );
};

export default AppLayout;
