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

import styles from './MovieCardStyles';

class MovieCard extends React.Component {
  render() {
    return (
      <View style={styles.ViewContainer}>
        <ImageBackground
          source={require('../../assets/images/t.jpg')}
          style={styles.backgroundImage}
          blurRadius={0.1}>
          <View style={styles.textViewContainer}>
            <Text style={styles.headingText}>Fight Club</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default MovieCard;
