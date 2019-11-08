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
import styles from './HomeStyles';
import MovieCard from '../../components/MovieCard/MovieCard';

const deviceWidth = Dimensions.get('window').height;
const deviceHeight = Dimensions.get('window').width;

class Home extends React.Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.ViewContainer}>
        <ImageBackground
          source={require('../../assets/images/l.jpg')}
          style={styles.backgroundImage}
          blurRadius={0.1}>
          <View>
            <View style={styles.textViewContainer}>
              <Text style={styles.headingText}>Trending</Text>
            </View>
            <View stlye={styles.movieListScrollView}>
              <ScrollView horizontal={true}>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Home;
