import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import './statics.scss';

const Statics = () => {
  return (
    <div className="statics">
      <h2 className="statics__title">Estatísticas gerais</h2>

      <div className="statics__content">
        <div className="statics__item">
          <p className="statics__label">Idade média:</p>

          <div className="statics__value">
            23
            <div className="statics__value-label">anos</div>
          </div>
        </div>

        <div className="statics__item">
          <p className="statics__label">Gênero:</p>

          <div className="statics__graph">
            <PieChart
              viewBoxSize={120}
              data={[
                { title: 'Masculino', value: 10, color: '#E38627' },
                { title: 'Feminino', value: 15, color: '#ffd600' },
                { title: 'Outros', value: 20, color: '#6A2135' },
              ]}
            />
          </div>
        </div>

        <div className="statics__item">
          <p className="statics__label">Tempo de casa:</p>

          <div className="statics__value --darken">
            <span>8</span>
            <div className="statics__value-label">Meses</div>
          </div>
        </div>

        <div className="statics__communities">
          <p className="statics__label">comunidades preferidas:</p>
          <p>#rvbr-games</p>
          <p>#rvbr-clube-do-livro</p>
          <p>#rvbr-couter-strike</p>
          <p>#mobi-design-system</p>
          <p>#mobi-testes</p>
        </div>
      </div>
    </div>
  );
};

export default Statics;
