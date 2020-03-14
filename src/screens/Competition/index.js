import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {pushPoints, listenOnOponentPoints} from '../../services/database';
import {displayTimer} from '../../utils/helperFunction';
import {WordMissingChar} from '../../components/WordMissingChar';
import {UNITS} from '../../utils/data';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

export const CompetitionScreen = props => {
  const {sessionKey} = props.route.params;

  const [timeLeft, setTimeLeft] = useState(60);
  const [points, setPoints] = useState(0);
  const [didPushPoints, setDidPushPoints] = useState(false);
  const [oponentPoints, setOponentPoints] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);

  const incrementPoints = () => {
    setPoints(points + 1);
  };

  const incrementAnsweredQuestions = () => {
    setAnsweredQuestions(answeredQuestions + 1);
  };

  const showResults = () => {
    alert('Your Points: ' + points + ' Oponent points: ' + oponentPoints);
  };

  useEffect(() => {
    listenOnOponentPoints(sessionKey, setOponentPoints);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      if (!didPushPoints) {
        pushPoints(sessionKey, points);
      }
      if (oponentPoints !== null) {
        showResults();
      }
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  useEffect(() => {
    if (answeredQuestions === 5) {
      pushPoints(sessionKey, points);
      if (oponentPoints !== null) {
        showResults();
      }
    }
  }, [answeredQuestions]);

  useEffect(() => {
    if (oponentPoints !== null && (answeredQuestions === 5 || timeLeft === 0)) {
      showResults();
    }
  }, [oponentPoints]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pointsTimerTextWrapper}>
        <Text>Points: {points}</Text>
        <Text>Time Left: {displayTimer(timeLeft)}</Text>
      </View>
      {UNITS[0].collections[0].words.map(
        (word, i) =>
          i < 5 && (
            <WordMissingChar
              word={word}
              missingCharIndex={(word.length + i) % word.length}
              onSuccess={incrementPoints}
              onAnswer={incrementAnsweredQuestions}
            />
          ),
      )}
    </ScrollView>
  );
};
