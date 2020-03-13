import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {WordMissingChar} from '../../components/WordMissingChar';
import {WordsGroup} from '../../components/WordsGroup';
import styles from './styles';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <WordMissingChar word="spring" missingCharIndex={2} />

        <View style={styles.horizontalLine} />

        <WordsGroup
          wordsInGroup={['spring', 'fall', 'autumn', 'summer', 'winter']}
          wordsOutOfGroup={['Tiger', 'parrot', 'eagle']}
        />
      </View>
    </SafeAreaView>
  );
};
