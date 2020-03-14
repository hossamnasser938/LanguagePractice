import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {Button} from '../../components/Button';
import firebase from 'react-native-firebase';
import {navigate, push} from '../../navigation/NavigationService';
import {UNITS} from '../../utils/data';
import {Unit} from '../../components/Unit';
import styles from './styles';

export const HomeScreen = () => {
  const signoutHandler = async () => {
    try {
      await firebase.auth().signOut();
      navigate('AuthScreen');
    } catch (e) {
      console.log('e', e);
      alert('Unexpected error occurred. Please try again later');
    }
  };

  const navigateToInitiateSession = type => {
    push('InitiateSessionScreen', {type});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textsWrapper}>
        <Text style={styles.mainText}>Pick a challenge</Text>
        <Text onPress={signoutHandler}>Sign out</Text>
      </View>
      <View>
        <Button
          title="Start Competition"
          onPress={() => navigateToInitiateSession('start')}
        />
        <Button
          title="Join Competition"
          onPress={() => navigateToInitiateSession('join')}
        />
      </View>
      {UNITS.map(unit => (
        <Unit unit={unit} />
      ))}
    </SafeAreaView>
  );
};
