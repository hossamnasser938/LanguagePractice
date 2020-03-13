import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../../screens/Home';
import {MissingCharChallengeScreen} from '../../screens/MissingCharChallenge';
import {WordsGroupChallengeScreen} from '../../screens/WordsGroupChallenge';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
};
