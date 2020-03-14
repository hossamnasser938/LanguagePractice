import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from '../Button';
import styles from './styles';

export const WordsGroup = props => {
  const {wordsInGroup, wordsOutOfGroup} = props;

  const [selectedWords, setSelectedWords] = useState([]);
  const [didSubmit, setDidSubmit] = useState(false);
  const [submitteddCorrectly, setSubmittedCorrectly] = useState(null);

  const selectDeselectWordHandler = word => {
    if (didSubmit) {
      return;
    }

    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter(item => item !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const submitHandler = () => {
    const success =
      selectedWords.length === wordsInGroup.length &&
      selectedWords.reduce((acc, item) => {
        return wordsInGroup.includes(item) && acc;
      }, true);

    setDidSubmit(true);

    setSubmittedCorrectly(success);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wordsWrapper}>
        {[...wordsInGroup, ...wordsOutOfGroup].map(word => {
          const isSelected = selectedWords.includes(word);
          const isCorrect = wordsInGroup.includes(word);

          return (
            <View
              style={[
                styles.wordWrapper,
                isSelected && styles.selectedWordWrapper,
              ]}>
              <Text
                style={[
                  styles.wordText,
                  isSelected && styles.selectedWordText,
                  ,
                ]}
                onPress={() => selectDeselectWordHandler(word)}>
                {word}
              </Text>
              {didSubmit && <Text>{isCorrect ? '✅' : '❌'}</Text>}
            </View>
          );
        })}
      </View>

      {didSubmit ? (
        <Text>{submitteddCorrectly ? '✅' : '❌'}</Text>
      ) : (
        <Button
          disabled={didSubmit || selectedWords.length === 0}
          title="Submit"
          onPress={submitHandler}
        />
      )}
    </View>
  );
};
