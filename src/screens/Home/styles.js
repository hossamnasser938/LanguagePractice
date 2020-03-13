import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    height: 400,
    justifyContent: 'space-around',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#bbb',
  },
  mainText: {
    color: '#bbb',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    marginVertical: 20,
  },
});

export default styles;
