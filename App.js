import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile';
import reducers from './src/reducers';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Profile: {screen: Profile},
  },
  {headerMode: 'none', initialRouteName: 'Home'},
);

const store = createStore(reducers, {});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
