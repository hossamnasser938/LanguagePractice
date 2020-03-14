import firebase from 'react-native-firebase';
import {push} from '../navigation/NavigationService';

export const createSession = sessionKey => {
  const userId = firebase.auth().currentUser.uid;

  return firebase
    .database()
    .ref('sessions')
    .child(sessionKey)
    .child(userId)
    .set(0);
};

export const joinSession = async sessionKey => {
  const userId = firebase.auth().currentUser.uid;

  try {
    const session = await firebase
      .database()
      .ref('sessions')
      .child(sessionKey)
      .once('value');

    if (!session.exists()) {
      return 'not_exist';
    } else {
      await firebase
        .database()
        .ref('sessions')
        .child(sessionKey)
        .child(userId)
        .set(0);

      return 'joined';
    }
  } catch (e) {
    return 'error';
  }
};

export const listenOnCompetitionEnter = sessionKey => {
  const userId = firebase.auth().currentUser.uid;

  firebase
    .database()
    .ref('sessions')
    .child(sessionKey)
    .on('child_added', dataSnapshot => {
      if (dataSnapshot.key !== userId) {
        push('CompetitionScreen', {sessionKey});
        firebase
          .database()
          .ref('sessions')
          .child(sessionKey)
          .off('child_added');
      }
    });
};

export const pushPoints = (sessionKey, points) => {
  const userId = firebase.auth().currentUser.uid;

  return firebase
    .database()
    .ref('sessions')
    .child(sessionKey)
    .child(userId)
    .set(points)
    .catch(e => {
      alert('Unexpected error occurred');
    });
};

export const listenOnOponentPoints = (sessionKey, onSet) => {
  const userId = firebase.auth().currentUser.uid;

  firebase
    .database()
    .ref('sessions')
    .child(sessionKey)
    .on('child_changed', dataSnapshot => {
      if (dataSnapshot.key !== userId) {
        onSet(dataSnapshot.val());
        firebase
          .database()
          .ref('sessions')
          .child(sessionKey)
          .off('child_changed');
      }
    });
};
