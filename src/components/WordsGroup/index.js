import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

export const WordsGroup = props => {
  const {wordsInGroup, wordsOutOfGroup} = props;

  const [selectedWords, setSelectedWords] = useState([]);
  const [didEvaluate, setDidEvaluate] = useState(false);
  const [evaluatedCorrectly, setEvaluatedCorrectly] = useState(null);

  const selectDeselectWordHandler = word => {
    if (didEvaluate) {
      return;
    }

    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter(item => item !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const evaluateHandler = () => {
    const success =
      selectedWords.length === wordsInGroup.length &&
      selectedWords.reduce((acc, item) => {
        return wordsInGroup.includes(item) && acc;
      }, true);

    setDidEvaluate(true);

    setEvaluatedCorrectly(success);
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
              {didEvaluate && <Text>{isCorrect ? '✅' : '❌'}</Text>}
            </View>
          );
        })}
      </View>

      {didEvaluate ? (
        <Text>{evaluatedCorrectly ? '✅' : '❌'}</Text>
      ) : (
        <Button
          disabled={didEvaluate || selectedWords.length === 0}
          title="Evaluate"
          onPress={evaluateHandler}
        />
      )}
    </View>
  );
};
