import React from 'react';
import './logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__wrapper">
        <img src="/images/logo-color.png" alt="logo" className="logo__image" />
      </div>

      <div className="logo__title">Bee.RV</div>
    </div>
  );
};

export default Logo;
