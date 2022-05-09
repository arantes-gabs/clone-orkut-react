import React from "react";
import Button from "@mui/material/Button";

import "./NewFriend.scss";

const NewFriend = () => {
  return (
    <div className="new-friend">
      <div className="new-friend__photo">
        <img src="./images/mark.jpeg" className="new-friend__photo-image" />
      </div>
      <div className="new-friend__actions">
        <h3 className="new-friend__actions-text">Marcão</h3>
        <span className="new-friend__actions-description">Marcão é seu amigo?</span>
        <div className="new-friend__actions-buttons">
          <Button variant="contained" size="small">
            Sim
          </Button>
          <Button variant="contained" size="small" className="no">
            Não
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewFriend;
