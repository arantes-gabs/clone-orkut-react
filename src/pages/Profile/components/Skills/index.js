import React from "react";
import ProgressBar from "components/ProgressBar";
import Button from "@mui/material/Button";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import "./skills.scss";

const skills = () => {
  return (
    <div className="core">
      <div className="core__edit-button">
        <Button variant="outlined" startIcon={<ModeEditOutlineOutlinedIcon />}>
          Editar
        </Button>
      </div>
      <div className="core__core-skills">
        <div className="skills">
          <h2 className="skills__title">O que sei fazer</h2>
          <div className="itens">
            <span>Angular</span>
            <ProgressBar progress="60" />
          </div>
          <div className="itens">
            <span>CSS</span>
            <ProgressBar progress="75" />
          </div>
          <div className="itens">
            <span>HTML</span>
            <ProgressBar progress="80" />
          </div>
          <br />
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineOutlinedIcon />}
          >
            Adicionar
          </Button>
        </div>

        <div class="vl"></div>
        <div className="opportunities">
          <h2 className="opportunities__title">O que quero melhorar</h2>
          <div className="itens">
            <span>Objetividade</span>
            <ProgressBar progress="20" />
          </div>
          <div className="itens">
            <span>Pacote Office</span>
            <ProgressBar progress="15" />
          </div>
          <div className="itens">
            <span>AWS</span>
            <ProgressBar progress="34" />
          </div>
          <br/>
          <Button
            variant="outlined"
            startIcon={<AddCircleOutlineOutlinedIcon />}
          >
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default skills;
