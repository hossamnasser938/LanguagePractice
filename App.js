import React from 'react';
import firebase from 'react-native-firebase';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigation/navigators';
import {setTopLevelNavigator} from './src/navigation/NavigationService';

export default () => {
  const currentUser = firebase.auth().currentUser;

  return (
    <NavigationContainer ref={setTopLevelNavigator}>
      <MainStack initialRouteName={currentUser ? 'HomeScreen' : 'AuthScreen'} />
    </NavigationContainer>
  );
};
