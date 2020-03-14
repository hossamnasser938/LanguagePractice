import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  innerContainer: {
    height: 400,
    justifyContent: 'space-around',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#bbb',
  },
  textsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  mainText: {
    color: '#bbb',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default styles;
