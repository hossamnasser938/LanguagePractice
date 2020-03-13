import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#bbb',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    padding: 10,
  },
  char: {
    fontSize: 24,
  },
  incorrectTypedChar: {
    textDecorationLine: 'line-through',
  },
});

export default styles;
