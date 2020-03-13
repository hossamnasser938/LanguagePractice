import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigation/navigators';

export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
