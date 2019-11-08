import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  ViewContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    margin: 0,
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  textViewContainer: {
    position: 'absolute',
    top: '20%',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
  headingText: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 5,
    color: '#fff',
  },
  movieListScrollView: {
    position: 'absolute',
    bottom: '10%',
    left: '5%',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
});
