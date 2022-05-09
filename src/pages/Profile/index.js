import React from "react";
import AppLayout from "layout/AppLayout";
import { Divider, Container } from "@material-ui/core";
import "./profile.scss";

const profile = () => {
  return (
    <AppLayout>
      <Container>
        <div className="profile-content">
          <img
            className="profile-content__img"
            src="/images/user.png"
            alt="user icon"
          />
          <div className="profile-content__text">
            <h2 className="profile-content__title">
              Gabriel Arantes
              <span className="profile-content__text__username">
                (garantes)
              </span>
            </h2>
            <span className="profile-content__text__carrer">
              Front-end Developer
            </span>
          </div>
        </div>
        <Divider />
      </Container>
    </AppLayout>
  );
};

export default profile;
