import React from 'react';

import CustomBadge from './components/CustomBadge';
import ProgressBar from 'components/ProgressBar';

import './insights.scss';

const Insights = () => {
  const rates = {
    relevance: 40,
    wellbeing: 70,
  };

  const insightsList = [
    {
      id: 1,
      action: 'Renato pode ajudar Bruno e Gabriel com Angular',
    },
    {
      id: 2,
      action: 'Bastante membro da equipe gostaria de aprender AWS',
    },
    {
      id: 3,
      action:
        'Música é um talento em comum, não seria interessante ter uma guilda sobre isso?',
    },
  ];

  return (
    <div className="insights">
      <h2 className="insights__title">Insights</h2>

      <div className="insights__box">
        <ul className="insights__list">
          {insightsList.map(({ id, action }) => {
            return (
              <li className="insights__list-item">
                <CustomBadge badgeContent={id} color="primary" />
                <p className="insights__list-text">{action}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="insights__box">
        <h4 className="insights__title">Índice de bem estar do time</h4>
        <ProgressBar progress={rates.wellbeing} />
      </div>

      <div className="insights__box">
        <h4 className="insights__title">
          Quanto as atividades se relacionam com a vontade individual
        </h4>
        <ProgressBar progress={rates.relevance} />
      </div>
    </div>
  );
};

export default Insights;
