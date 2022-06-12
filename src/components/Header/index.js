import { Link } from "gatsby";
import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import "./header.scss";
import Logo from "components/Logo";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <div className="header__logo-wrapper">
            <Link to="/profile" className="header__logo-link">
              <Logo />
            </Link>
          </div>
          <nav className="header__menu">
            <Link
              className="header__link"
              to="/"
              activeClassName="header__link--actived"
            >
              Início
            </Link>

            <Link
              className="header__link"
              activeClassName="header__link--actived"
              to="/community"
            >
              Amigos
            </Link>

            <Link
              className="header__link"
              activeClassName="header__link--actived"
              to="/profile"
            >
              Comunidades
            </Link>
          </nav>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Pesquisar"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Gabriel Arantes" src="./images/profile.jpeg" />
          </Stack>
        </div>
      </Container>
    </header>
  );
};

export default Header;
