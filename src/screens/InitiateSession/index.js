import React, {useState} from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import {Button} from '../../components/Button';
import {
  createSession,
  joinSession,
  listenOnCompetitionEnter,
} from '../../services/database';
import {push} from '../../navigation/NavigationService';
import {UNITS} from '../../utils/data';
import styles from './styles';

export const InitiateSessionScreen = props => {
  const {type} = props.route.params;

  const [sessionKey, setSessionKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(0);

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
      listenOnCompetitionEnter(sessionKey, selectedUnit);
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
      const {result, unitIndex} = await joinSession(sessionKey);
      setLoading(false);
      switch (result) {
        case 'joined':
          push('CompetitionScreen', {sessionKey, unitIndex});
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
          {type === 'start' && (
            <View style={{paddingVertical: 20}}>
              <Text>Choose a unit to compete on</Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {UNITS.map((unit, index) => (
                  <View
                    style={{
                      borderColor: index === selectedUnit ? 'green' : '#bbb',
                      borderWidth: 1,
                      borderRadius: 5,
                      marginVertical: 10,
                      marginEnd: 10,
                    }}>
                    <Text
                      style={{
                        color: index === selectedUnit ? 'green' : '#bbb',
                        padding: 10,
                      }}
                      onPress={() => setSelectedUnit(index)}>
                      {unit.title}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          )}
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
