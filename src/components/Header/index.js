import { Link } from 'gatsby';
import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

import './header.scss';
import Logo from 'components/Logo';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header__content">
          <div className="header__logo-wrapper">
            <Logo />
          </div>

          <div className="header__search-box">
            <form noValidate autoComplete="off">
              <TextField
                className="header__search"
                label="encontrar pessoa 🔎"
              />
            </form>
          </div>
          <nav className="header__menu">
            <Link
              className="header__link"
              to="/"
              activeClassName="header__link--actived"
            >
              <span className="header__link-icon"> 📊 </span>Painel
            </Link>

            <Link
              className="header__link"
              activeClassName="header__link--actived"
              to="/community"
            >
              <span className="header__link-icon">🏘</span> comunidades
            </Link>

            <Link
              className="header__link"
              activeClassName="header__link--actived"
              to="/profile"
            >
              <span className="header__link-icon">🐝</span> Meu perfil
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
