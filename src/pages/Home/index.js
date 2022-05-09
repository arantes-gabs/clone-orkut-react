import React from "react";
import AppLayout from "layout/AppLayout";
import Profile from "./components/Profile";
import NewFriend from "./components/NewFriend";
import Container from "@material-ui/core/Container";
import "./home.scss";

const Home = () => {
  return (
    <AppLayout className="home">
      <Container>
        <div className="home-content">
          <Profile />
          <div className="home-content__boards">
            <div className="home-content__boards__status">
              <h1>Bem vindo, Gabriel</h1>
              <h4>Visualizações de perfil:</h4>
              <h4>Visitantes recentes:</h4>
              <h4>Sorte de hoje:</h4>
            </div>
            <div className="home-content__boards__friends"></div>
            <div className="home-content__boards__new-friends">
              <h2>Novos pedidos de amizade (1)</h2>
              <NewFriend />
            </div>
            <div className="home-content__boards__communities"></div>
          </div>
        </div>
      </Container>
    </AppLayout>
  );
};

export default Home;
