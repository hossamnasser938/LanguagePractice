import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigation/navigators';
import {setTopLevelNavigator} from './src/navigation/NavigationService';

export default () => {
  return (
    <NavigationContainer ref={setTopLevelNavigator}>
      <MainStack />
    </NavigationContainer>
  );
};
