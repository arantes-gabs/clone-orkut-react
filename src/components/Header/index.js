import { Link } from "gatsby";
import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

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

          <div className="header__search-box">
            <form noValidate autoComplete="off">
              <TextField
                className="header__search"
                label="encontrar pessoa 🔎"
                variant="filled"
              />
            </form>
          </div>
          {/* <nav className="header__menu">
            <Link
              className="header__link"
              to="/"
              activeClassName="header__link--actived"
            >
              <span className="header__link-icon"> 📊 </span>Início
            </Link>

            <Link
              className="header__link"
              activeClassName="header__link--actived"
              to="/community"
            >
              <span className="header__link-icon">🏘</span> Amigos
            </Link>

            <Link
              className="header__link"
              activeClassName="header__link--actived"
              to="/profile"
            >
              <span className="header__link-icon">🐝</span> Comunidades
            </Link>
          </nav> */}
        </div>
      </Container>
    </header>
  );
};

export default Header;
