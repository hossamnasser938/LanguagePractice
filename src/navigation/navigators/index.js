import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens/Home';
import {MissingCharChallengeScreen} from '../../screens/MissingCharChallenge';
import {WordsGroupChallengeScreen} from '../../screens/WordsGroupChallenge';

import {AuthScreen} from '../../screens/Auth';

const Stack = createStackNavigator();

export const MainStack = props => {
  return (
    <Stack.Navigator initialRouteName={props.initialRouteName}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MissingCharChallengeScreen"
        component={MissingCharChallengeScreen}
      />
      <Stack.Screen
        name="WordsGroupChallengeScreen"
        component={WordsGroupChallengeScreen}
      />
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
