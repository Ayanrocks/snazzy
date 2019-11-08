import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Profile: {screen: Profile},
  },
  {headerMode: 'none', initialRouteName: 'Home'},
);

const App = createAppContainer(MainNavigator);

export default App;
