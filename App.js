import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {WordMissingChar} from './src/components/WordMissingChar';
import {WordsGroup} from './src/components/WordsGroup';
const App = () => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    height: 400,
    justifyContent: 'space-around',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#bbb',
  },
});

export default App;
