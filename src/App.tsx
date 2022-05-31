import React from 'react';
import {StatusBar} from 'react-native';
import {HomeScreen} from './pages/home';

export const App = () => {
  StatusBar.setBarStyle('dark-content', true);
  return <HomeScreen />;
};
