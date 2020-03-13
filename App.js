import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WordMissingChar} from './src/components/WordMissingChar';
import {WordsGroup} from './src/components/WordsGroup';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WordMissingChar word="play" missingCharIndex={2} /> */}
      <WordsGroup
        wordsInGroup={['play', 'footbal']}
        wordsOutOfGroup={['study', 'learn']}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
