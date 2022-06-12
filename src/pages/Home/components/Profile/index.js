import React from "react";
import { Link } from "gatsby";
import Divider from "@mui/material/Divider";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import "./profile.scss";

const Profile = () => {
  /* const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  }; */
  return (
    <div className="profile-sidebar">
      <div className="profile-sidebar__photo">
        <img
          src="./images/profile.jpeg"
          className="profile-sidebar__photo-image"
          alt="profile-image"
        />
      </div>
      <Divider />
      <div className="profile-sidebar__user-data">
        <h3>Gabriel Arantes</h3>
        <span>Masculino</span>
        <span>Namorando</span>
        <span>Brasil</span>
      </div>
      <Divider />
      <div className="profile-sidebar__actions">
        <div className="profile-sidebar__actions__edit-profile">
          <Link className="link" activeClassName="link--actived" to="#">
            <span className="link-icon">
              <EditOutlinedIcon fontSize="small" />
            </span>
            Editar Perfil
          </Link>
        </div>
        <Divider />
        <div className="profile-sidebar__actions__items">
          <Link className="link" activeClassName="link--actived" to="#">
            <span className="link-icon">
              <AccountBoxOutlinedIcon />
            </span>{" "}
            Perfil
          </Link>
          <Link className="link" activeClassName="link--actived" to="#">
            <span className="link-icon">
              <MarkunreadMailboxOutlinedIcon />
            </span>{" "}
            Recados
          </Link>
          <Link className="link" activeClassName="link--actived" to="#">
            <span className="link-icon">
              <CollectionsOutlinedIcon />
            </span>{" "}
            Álbum
          </Link>
          <Link className="link" activeClassName="link--actived" to="#">
            <span className="link-icon">
              <VideoCameraBackOutlinedIcon />
            </span>{" "}
            Vídeos
          </Link>
        </div>
        <Divider />
        <div className="profile-sidebar__actions__items">
          <Link className="link" activeClassName="link--actived" to="#">
            <span className="link-icon">
              <LightModeOutlinedIcon />
            </span>{" "}
            Depoimentos
          </Link>
          <Link className="link" activeClassName="link--actived" to="#">
            <span className="link-icon">
              <EmailOutlinedIcon />
            </span>{" "}
            Mensagens
          </Link>
          <Link className="link" activeClassName="link--actived" to="#">
            <span className="link-icon">
              <SettingsOutlinedIcon />
            </span>{" "}
            Configurações
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
