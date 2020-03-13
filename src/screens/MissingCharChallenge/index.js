import React from 'react';
import {ScrollView, View} from 'react-native';
import {WordMissingChar} from '../../components/WordMissingChar';
import styles from './styles';

export const MissingCharChallengeScreen = props => {
  const {unit} = props.route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        {unit.collections.map(collection =>
          collection.words.map(word => (
            <WordMissingChar word={word} missingCharIndex={1} />
          )),
        )}
      </View>
    </ScrollView>
  );
};
