import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
