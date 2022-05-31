import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';
import { CardContainerComponent } from '.';

describe('CardContainerComponent', () => {
  test('Should render with a children', () => {
    const { getByTestId } = render(
      <CardContainerComponent><View testID="card-container-children" /></CardContainerComponent>,
    );
    expect(() => getByTestId('card-container-children')).not.toThrow();
  });

  test('Should render with custom border radius', () => {
    const customBorderRadius = 50;
    const { getByTestId } = render(
      <CardContainerComponent style={{ borderRadius: customBorderRadius }} />,
    );
    const container = getByTestId('card-container-component');
    expect(container.props.style.borderRadius).toBe(customBorderRadius);
  });

  test('Should render with an action', () => {
    let wasClicked = false;
    const { getByTestId } = render(
      <CardContainerComponent onPress={() => { wasClicked = true; }} />,
    );
    const container = getByTestId('card-container-component');
    fireEvent.press(container);
    expect(wasClicked).toBeTruthy();
  });
});
