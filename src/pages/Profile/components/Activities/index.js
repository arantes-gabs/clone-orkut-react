import React, { useState } from 'react';
import InputWithTags from 'components/InputWithTags';

const Activities = () => {
  const [apiData, setApiData] = useState([
    {
      id: 0,
      title: 'Caracteristicas ...',
      label: 'Coisas que sei fazer',
      values: ['html', 'css', 'javascript', 'react'],
    },
    {
      id: 1,
      title: 'Caracteristicas ...',
      label: 'Coisas que gostaria de melhorar',
      values: ['aws', 'angular'],
    },
    {
      id: 2,
      title: 'Caracteristicas ...',
      label: 'Coisas que gosto de fazer',
      values: ['música', 'esporte'],
    },
  ]);

  return (
    <div className="profile-content__inputs">
      {apiData.map(({ id, title, label, values }) => {
        return (
          <div className="profile-content__input" key={id}>
            <h3 className="profile-content__input-text">{title}</h3>
            <InputWithTags apiValues={values} inputLabel={label} />
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
