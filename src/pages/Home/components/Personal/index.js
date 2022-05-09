import React from 'react';
import MbtiCard from './components/MbtiCard';
import './personal.scss';

const Personal = () => {
  return (
    <div className="personal">
      <div className="personal__mbti-data">
        <h2 className="personal__title">MBTI</h2>

        <div className="personal__mbti">
          <MbtiCard title="Energia e motivação" letter="i" percentage="52" />

          <MbtiCard title="Percepção de mundo" letter="n" percentage="100" />

          <MbtiCard
            title="Avaliação e tomada de decisão"
            letter="t"
            percentage="80"
          />

          <MbtiCard title="Estilo de vida" letter="j" percentage="78" />
        </div>
      </div>
    </div>
  );
};

export default Personal;
