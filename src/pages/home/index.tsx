import React from 'react';
import {UserCardComponent} from '../../components/user-card';
import {Container, Title} from './styles';

export const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Title>UserCardComponent Example:</Title>
      <UserCardComponent
        userImage={{uri: 'https://github.com/ruifernandees.png'}}
        userName="Rui Fernandes"
        userRole="Developer"
      />
    </Container>
  );
};
