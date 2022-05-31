import React from 'react';
import {render} from '@testing-library/react-native';
import {UserCardComponent} from '.';

describe('UserCardComponent', () => {
  test('Should render correctly', () => {
    render(
      <UserCardComponent
        userImage={{uri: 'https://github.com/ruifernandees.png'}}
        userName="Rui Fernandes"
        userRole="Developer"
      />,
    );
  });
});
