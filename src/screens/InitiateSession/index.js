import React, {useState} from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import {Button} from '../../components/Button';
import {
  createSession,
  joinSession,
  listenOnCompetitionEnter,
} from '../../services/database';
import {push} from '../../navigation/NavigationService';
import styles from './styles';

export const InitiateSessionScreen = props => {
  const {type} = props.route.params;

  const [sessionKey, setSessionKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [waiting, setWaiting] = useState(false);

  const submitHandler = () => {
    if (sessionKey) {
      if (type === 'start') {
        startSessionHandler();
      } else {
        joinSessionHandler();
      }
    }
  };

  const startSessionHandler = async () => {
    setLoading(true);
    try {
      await createSession(sessionKey);
      listenOnCompetitionEnter(sessionKey);
      setWaiting(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      alert('Unexpected error occurred. Please, try again');
    }
  };

  const joinSessionHandler = async () => {
    setLoading(true);
    try {
      const result = await joinSession(sessionKey);
      setLoading(false);
      switch (result) {
        case 'joined':
          push('CompetitionScreen', {sessionKey});
          break;
        case 'not_exist':
          alert('Session with key ' + sessionKey + ' does not exist');
          break;
        case 'error':
          alert('Unexpected error occurred. Please, try again');
          break;
        default:
          alert('Unexpected error occurred. Please, try again');
      }
    } catch (e) {
      setLoading(false);
      alert('Unexpected error occurred. Please, try again');
    }
  };

  return (
    <View style={styles.container}>
      {waiting ? (
        <Text>Wait until your oponent enter</Text>
      ) : (
        <View>
          <TextInput
            style={styles.input}
            placeholder={
              type === 'start'
                ? 'Create session key'
                : 'Enter session key to join'
            }
            onChangeText={setSessionKey}
            autoCapitalize={false}
          />
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button title="Submit" onPress={submitHandler} />
          )}
        </View>
      )}
    </View>
  );
};
