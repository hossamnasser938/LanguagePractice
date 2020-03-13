import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {UNITS} from '../../utils/data';
import {Unit} from '../../components/Unit';
import styles from './styles';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>Pick a challenge</Text>
      {UNITS.map(unit => (
        <Unit unit={unit} />
      ))}

      {/* <View style={styles.innerContainer}>
        <WordMissingChar word="spring" missingCharIndex={2} />

        <View style={styles.horizontalLine} />

        <WordsGroup
          wordsInGroup={['spring', 'fall', 'autumn', 'summer', 'winter']}
          wordsOutOfGroup={['Tiger', 'parrot', 'eagle']}
        />
      </View> */}
    </SafeAreaView>
  );
};
