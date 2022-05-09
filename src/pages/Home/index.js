import React from "react";
import Container from "@material-ui/core/Container";
import AppLayout from "layout/AppLayout";
import "./home.scss";
import Personal from "./components/Personal";
import Core from "./components/Core";
import Insights from "./components/Insights";
import Statics from "./components/Statics";

/* fetch("https://77c8-2804-14c-5b74-8d87-a533-e7d9-3d0e-8b9c.sa.ngrok.io/").then(
  function (response) {
    if (!response.ok) throw new Error("erro");
    return response.json();
  }
); */

const Home = () => {
  return (
    <AppLayout className="home">
      <Container>
        <div className="home__content">
          <div className="home__content-wrapper">
            <Statics />
          </div>

          <div className="home__column">
            <div className="home__content-wrapper">
              <Core />
            </div>

            <div className="home__content-wrapper">
              <Insights />
            </div>
          </div>

          <div className="home__content-wrapper">
            <Personal />
          </div>
        </div>
      </Container>
    </AppLayout>
  );
};

export default Home;
