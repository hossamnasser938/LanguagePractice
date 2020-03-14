import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export const Button = props => (
  <TouchableOpacity
    disabled={props.disabled}
    onPress={props.onPress}
    style={styles.container}>
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
);
