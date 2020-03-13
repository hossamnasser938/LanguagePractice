import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#bbb',
  },
  wordsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  wordWrapper: {
    alignItems: 'center',
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    margin: 10,
  },
  selectedWordWrapper: {
    borderColor: 'green',
  },
  incorrectlySelectedWordWrapper: {
    borderColor: 'red',
  },
  wordText: {
    padding: 10,
  },
  selectedWordText: {
    color: 'green',
  },
  incorrectlySelectedWordText: {
    color: 'red',
  },
  evaluateButton: {
    margin: 10,
  },
});

export default styles;
