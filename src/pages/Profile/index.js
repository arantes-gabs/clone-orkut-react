import React from 'react';
import AppLayout from 'layout/AppLayout';
import { Divider, Container } from '@material-ui/core';
import { navigate } from 'gatsby';
import isClient from 'utils/envs/isClient';
import Activities from './components/Activities';
import Skills from './components/Skills';
import CardCommunity from '../../components/CardCommunity';

import './profile.scss';

const Profile = () => {
  const onLogoff = () => {
    isClient() && localStorage.clear();
    navigate('/login');
  };

  const plans = [
    {
      title: 'Games',
      image: 'images/games.jpeg',
      description: 'Venha se divertir codando!',
      url: '#',
    },
    {
      title: 'Guilda',
      image: 'images/guilda.jpeg',
      description: 'Venha se divertir codando!',
      url: '#',
    },
    {
      title: 'Séries',
      image: 'images/got.jpeg',
      description: 'Venha se divertir codando!',
      url: '#',
    },
    {
      title: 'Músicas',
      image: 'images/spotify.jpeg',
      description: 'Venha se divertir codando!',
      url: '#',
    },
  ];

  return (
    <AppLayout>
      <Container>
        <div className="profile-content">
          <div className="profile-content__infos">
            <img
              className="profile-content__img"
              src="/images/user.png"
              alt="user icon"
            />
            <div className="profile-content__text">
              <h2 className="profile-content__title">Bruno Annunciato</h2>
              <span className="profile-content__text__carrer">
                Front-end Developer
              </span>
              <br />
              <span className="profile-content__text__carrer">Idade: 22</span>
              <br />
              <span className="profile-content__text__carrer">
                Gênero: Masculino
              </span>
              <br />
              <span className="profile-content__text__carrer">
                Tempo de casa: 4 meses
              </span>
            </div>
          </div>

          <button onClick={onLogoff} className="profile-content__logoff">
            desconectar
          </button>
        </div>
        <Divider />
        <div className="profile-data">
          <div className="profile-data__column">
            <div className="profile-data__content-wrapper">
              <Skills />
            </div>

            <div className="profile-data__content-wrapper">
              <Activities />
            </div>
          </div>
        </div>
        <div className="community-content">
          <h1 className="title-community">Interesses Pessoais</h1>
          <div className="community-content__cards">
            {plans.map((plan) => {
              return <CardCommunity plan={plan} />;
            })}
          </div>
        </div>
      </Container>
    </AppLayout>
  );
};

export default Profile;
