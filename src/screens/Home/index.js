import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import firebase from 'react-native-firebase';
import {navigate} from '../../navigation/NavigationService';
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textsWrapper}>
        <Text style={styles.mainText}>Pick a challenge</Text>
        <Text onPress={signoutHandler}>Sign out</Text>
      </View>
      {UNITS.map(unit => (
        <Unit unit={unit} />
      ))}
    </SafeAreaView>
  );
};
