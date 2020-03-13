import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput,
  ActivityIndicator,
  Switch,
} from 'react-native';
import firebase from 'react-native-firebase';
import {push} from '../../navigation/NavigationService';
import styles from './styles';

export const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [loading, setLoading] = useState(false);

  const authHandler = async () => {
    setLoading(true);

    try {
      let userCredential;
      if (isNewUser) {
        userCredential = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
      } else {
        userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
      }

      setLoading(false);
      push('HomeScreen');
    } catch (e) {
      setLoading(false);
      alert('Error: ' + e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          autoCapitalize={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={setPassword}
          autoCapitalize={false}
          secureTextEntry={true}
        />
        <View style={styles.newUserRow}>
          <Text>New User? </Text>
          <Switch value={isNewUser} onValueChange={setIsNewUser} />
        </View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button
            disabled={!email || !password}
            title="Submit"
            onPress={authHandler}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
