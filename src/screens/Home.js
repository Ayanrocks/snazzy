import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';

const deviceWidth = Dimensions.get('window').height;
const deviceHeight = Dimensions.get('window').width;

class Home extends React.Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.ViewContainer}>
        <ImageBackground
          source={require('../assets/images/t.jpg')}
          style={styles.backgroundImage}
          blurRadius={0.1}>
          <View style={styles.textViewContainer}>
            <Text style={styles.headingText}>Trending</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
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
});
