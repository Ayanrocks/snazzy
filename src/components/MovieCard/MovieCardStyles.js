import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  ViewContainer: {
    height: 90,
    width: 160,
    display: 'flex',
    borderRadius: 10,
    borderWidth: 1,
    overflow: 'hidden',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {x: 0, y: 7},
    shadowRadius: 15,
  },
  backgroundImage: {
    margin: 0,
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  textViewContainer: {
    flex: 1,
    margin: 5,
  },
  headingText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Gilroy-Light, sans-serif',
  },
});
