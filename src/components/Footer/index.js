import React from "react";
import { Link } from "gatsby";
import { Divider } from "@material-ui/core";
import Logo from "components/Logo";

import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Logo />
      <Divider orientation="vertical" variant="middle" flexItem />
      <Link className="footer_link" activeClassName="link--actived" to="#">
        Sobre o Orkut
      </Link>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Link className="footer_link" activeClassName="link--actived" to="#">
        Novidades
      </Link>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Link className="footer_link" activeClassName="link--actived" to="#">
        Privacidade
      </Link>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Link className="footer_link" activeClassName="link--actived" to="#">
        Termos de uso
      </Link>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Link className="footer_link" activeClassName="link--actived" to="#">
        Ajuda
      </Link>
    </div>
  );
};

export default Footer;
