import React from 'react';
import { render } from '@testing-library/react-native';
import { UserCardComponent } from '.';

describe('UserCardComponent', () => {
  test('Should render correctly', () => {
    const imageUri = 'https://github.com/ruifernandees.png';
    const { getByText, getByTestId } = render(
      <UserCardComponent
        userImage={{ uri: imageUri }}
        userName="Rui Fernandes"
        userRole="Developer"
      />,
    );
    const image = getByTestId('profile-image');
    expect(image.props.source.uri).toBe(imageUri);
    expect(() => getByText('Rui Fernandes')).not.toThrow();
    expect(() => getByText('Developer')).not.toThrow();
  });
});
