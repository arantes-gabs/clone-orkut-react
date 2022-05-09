import React, { useEffect } from "react";

import Header from "components/Header";
import "./app-layout.scss";
import isClient from "utils/envs/isClient";
import { navigate } from "gatsby";

const AppLayout = ({ children, className }) => {
  return (
    <div className={`app-layout ${className ? className : ""}`}>
      <Header />

      <main className="app-layout__content">{children}</main>
    </div>
  );
};

export default AppLayout;
