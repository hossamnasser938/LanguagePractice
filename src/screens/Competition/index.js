import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {pushPoints, listenOnOponentPoints} from '../../services/database';
import {displayTimer} from '../../utils/helperFunction';
import {WordMissingChar} from '../../components/WordMissingChar';
import {WordsGroup} from '../../components/WordsGroup';
import {UNITS} from '../../utils/data';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

const TIME = 120;

const calculateUnitQuestionsCount = unitIndex => {
  let count = 0;

  UNITS[unitIndex].collections.forEach(col => {
    count += 1;
    count += col.words.length;
  });

  return count;
};

export const CompetitionScreen = props => {
  const {sessionKey, unitIndex} = props.route.params;

  const QUESTIONS_COUNT = calculateUnitQuestionsCount(unitIndex);

  const [timeLeft, setTimeLeft] = useState(TIME);
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
    alert('Your Points: ' + points + ' Oponent points: ' + +oponentPoints);
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
    if (answeredQuestions === QUESTIONS_COUNT) {
      pushPoints(sessionKey, points);
      setDidPushPoints(true);
      if (oponentPoints !== null) {
        showResults();
      }
    }
  }, [answeredQuestions]);

  useEffect(() => {
    if (
      oponentPoints !== null &&
      (answeredQuestions === QUESTIONS_COUNT || timeLeft === 0)
    ) {
      showResults();
    }
  }, [oponentPoints]);

  const wordMissingQuestions = [];
  UNITS[unitIndex].collections.forEach(col => {
    col.words.forEach((word, i) => {
      wordMissingQuestions.push(
        <WordMissingChar
          word={word}
          missingCharIndex={(word.length + i) % word.length}
          onSuccess={incrementPoints}
          onAnswer={incrementAnsweredQuestions}
        />,
      );
    });
  });

  const wordGroupQuestions = UNITS[unitIndex].collections.map(col => (
    <WordsGroup
      wordsInGroup={col.words}
      wordsOutOfGroup={UNITS[unitIndex].randomWords}
      onSuccess={incrementPoints}
      onAnswer={incrementAnsweredQuestions}
    />
  ));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pointsTimerTextWrapper}>
        <Text>Points: {points}</Text>
        <Text>Time Left: {displayTimer(timeLeft)}</Text>
      </View>
      {wordMissingQuestions}
      {wordGroupQuestions}
    </ScrollView>
  );
};
