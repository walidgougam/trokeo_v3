import React from 'react';
import {View, Text} from 'react-native';
import {GroupWithHeart, ManPainting, PiggyBank} from '../assets/image/images';

export const data = [
  {
    image: <GroupWithHeart />,
    title: 'Le geste eco-citoyen',
    description:
      'Lutter contre la consommation de masse c’est possible avec Trokéo n’achetez plus, échangez !',
  },
  {
    image: <PiggyBank />,
    title: 'Economisez de l’argent',
    description:
      'Le troc vous permettra d’accéder à des offres répondant à vos besoins tout en vous libérant d’objets encombrants',
  },
  {
    image: <ManPainting />,
    title: 'Faite partagez votre savoir faire',
    description:
      'Proposer vos prestations contre un service ou un objet auprès de la communauté de trokeurs.',
  },
];
