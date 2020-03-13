import React from 'react';
import {ScrollView, View} from 'react-native';
import {WordsGroup} from '../../components/WordsGroup';
import styles from './styles';

export const WordsGroupChallengeScreen = props => {
  const {unit} = props.route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        {unit.collections.map(collection => (
          <WordsGroup
            wordsInGroup={collection.words}
            wordsOutOfGroup={unit.randomWords}
          />
        ))}
      </View>
    </ScrollView>
  );
};
