import React from 'react';
import { StatusBar } from 'react-native';
import { HomeScreen } from './pages/home';

export function App() {
  StatusBar.setBarStyle('dark-content', true);
  return <HomeScreen />;
}
