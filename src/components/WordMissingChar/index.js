import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

export const WordMissingChar = props => {
  const {word, missingCharIndex, onSuccess, onAnswer} = props;
  const missingChar = word.charAt(missingCharIndex);

  const [charTyped, setCharTyped] = useState('');
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null);

  useEffect(() => {
    if (charTyped) {
      onAnswer();
      if (charTyped === missingChar) {
        onSuccess();
        setAnsweredCorrectly(true);
      } else {
        setAnsweredCorrectly(false);
      }
    }
  }, [charTyped]);

  return (
    <View style={styles.container}>
      {word.split('').map((char, index) => {
        if (index === missingCharIndex) {
          return answeredCorrectly !== null ? (
            <Text style={styles.char}>
              <Text>{missingChar} </Text>
              {!answeredCorrectly && (
                <Text style={styles.incorrectTypedChar}>{charTyped}</Text>
              )}
              {answeredCorrectly ? '✅' : '❌'}
            </Text>
          ) : (
            <TextInput
              placeholder="__"
              style={[styles.input, styles.char]}
              onChangeText={setCharTyped}
              autoCapitalize={false}
              maxLength={1}
            />
          );
        }

        return <Text style={styles.char}>{char}</Text>;
      })}
    </View>
  );
};
