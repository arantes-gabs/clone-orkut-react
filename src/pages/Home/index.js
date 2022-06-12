import React from "react";
import Footer from "../../components/Footer";
import { Link } from "gatsby";
import AppLayout from "layout/AppLayout";
import Profile from "./components/Profile";
import NewFriend from "./components/NewFriend";
import Container from "@material-ui/core/Container";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
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
              <div className="home-content__boards__status__icons">
                <Tooltip title="Recados">
                  <Badge badgeContent={30} color="primary">
                    <AppRegistrationOutlinedIcon color="action" />
                  </Badge>
                </Tooltip>
                <Tooltip title="Fãs">
                  <Badge badgeContent={9} color="primary">
                    <StarOutlinedIcon color="action" />
                  </Badge>
                </Tooltip>
                <Tooltip title="Fotos">
                  <Badge badgeContent={12} color="primary">
                    <PhotoCameraOutlinedIcon color="action" />
                  </Badge>
                </Tooltip>
                <Tooltip title="Mensagens">
                  <Badge badgeContent={1} color="primary">
                    <MailIcon color="action" />
                  </Badge>
                </Tooltip>
              </div>
              <h4>Visualizações de perfil:</h4>
              <h4>Visitantes recentes:</h4>
              <h4>Sorte de hoje:</h4>
            </div>
            <div className="home-content__boards__friends">
              <h2>
                Meus Amigos{" "}
                <span className="home-content__boards__friends__number">
                  (3)
                </span>
              </h2>
              <div className="home-content__boards__friends__photos">
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    "& > :not(style)": {
                      width: 110,
                      height: 110,
                    },
                  }}
                >
                  <Paper>
                    <img
                      src="./images/profile.jpeg"
                      className="home-content__boards__friends__images"
                    />
                    <p>Gabriel A.</p>
                  </Paper>
                  <Paper>
                    <img
                      src="./images/profile.jpeg"
                      className="home-content__boards__friends__images"
                    />
                    <p>Gabriel A.</p>
                  </Paper>
                  <Paper>
                    <img
                      src="./images/profile.jpeg"
                      className="home-content__boards__friends__images"
                    />
                    <p>Gabriel A.</p>
                  </Paper>
                </Box>
              </div>

              <Link
                className="home-content__boards__friends__photos-link"
                activeClassName="link--actived"
                to="#"
              >
                Ver todos
              </Link>
            </div>
            <div className="home-content__boards__new-friends">
              <h2>Novos pedidos de amizade (1)</h2>
              <NewFriend />
            </div>
            <div className="home-content__boards__communities">
              <h2>
                Minhas Comunidades{" "}
                <span className="home-content__boards__friends__number">
                  (3)
                </span>
              </h2>
              <div className="home-content__boards__friends__photos">
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    "& > :not(style)": {
                      width: 110,
                      height: 100,
                    },
                  }}
                >
                  <Paper>
                    <img
                      src="./images/react.png"
                      className="home-content__boards__friends__images"
                    />
                    <p>React</p>
                  </Paper>
                  <Paper>
                    <img
                      src="./images/react.png"
                      className="home-content__boards__friends__images"
                    />
                    <p>React</p>
                  </Paper>
                  <Paper>
                    <img
                      src="./images/react.png"
                      className="home-content__boards__friends__images"
                    />
                    <p>React</p>
                  </Paper>
                </Box>
              </div>

              <Link
                className="home-content__boards__friends__photos-link"
                activeClassName="link--actived"
                to="#"
              >
                Ver todos
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    </AppLayout>
  );
};

export default Home;
