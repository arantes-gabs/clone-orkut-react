import React from 'react';
import Divider from '@mui/material/Divider';
import ProgressBar from 'components/ProgressBar';

import './core.scss';

const core = () => {
  return (
    <div className="core">
      <div className="core-skills">
        <div className="skills">
          <h2>Forças</h2>
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
        </div>
        <div class="vl"></div>
        <div className="opportunities">
          <h2>Melhorias</h2>
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
        </div>
      </div>
      <Divider className="div" />
      <div className="highlights">
        <div className="talents">
          <h2>Interesses</h2>
          <div className="itens">
            <span>Música</span>
            <ProgressBar progress="80" />
          </div>
          <div className="itens">
            <span>Esporte</span>
            <ProgressBar progress="73" />
          </div>
          <div className="itens">
            <span>viagens</span>
            <ProgressBar progress="50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default core;
