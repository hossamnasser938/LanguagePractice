import React from 'react';
import {View, Text, Button} from 'react-native';
import {push} from '../../navigation/NavigationService';
import styles from './styles';

export const Unit = props => {
  const {unit} = props;

  const navigateToMissingCharChallenge = () => {
    push('MissingCharChallengeScreen', {unit});
  };

  const navigateToWordsGroupChallenge = () => {
    push('WordsGroupChallengeScreen', {unit});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.unitTitleText}>{unit.title}</Text>
      <View style={styles.challengesButtonsWrapper}>
        <Button
          title="Missing character Challenge"
          onPress={navigateToMissingCharChallenge}
        />

        <Button
          title="Words Group Challenge"
          onPress={navigateToWordsGroupChallenge}
        />
      </View>
    </View>
  );
};
