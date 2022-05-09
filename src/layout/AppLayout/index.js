import Header from "components/Header";
import React from "react";
import "./app-layout.scss";


const AppLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />

      <main className="app-layout__content">{children}</main>
    </div>
  );
};

export default AppLayout;
