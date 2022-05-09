import React from 'react';
import AppLayout from 'layout/AppLayout';
import { Container } from '@material-ui/core';
import CardCommunity from 'components/CardCommunity';
import './community.scss';

const community = () => {
  const plans = [
    {
      title: 'Games',
      image: 'images/games.jpeg',
      description: 'Venha se divertir codando!',
      url: '#',
    },
  ];

  const allPlans = [
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
        <div className="community-content">
          <h1 className="title">Comunidades indicadas para você</h1>
          <div className="community-content__cards">
            {plans.map((plan) => {
              return <CardCommunity plan={plan} />;
            })}
          </div>
          <h1 className="title-community">Todas as comunidades</h1>
          <div className="community-content__cards">
            {allPlans.map((plan) => {
              return <CardCommunity plan={plan} />;
            })}
          </div>
        </div>
      </Container>
    </AppLayout>
  );
};

export default community;
