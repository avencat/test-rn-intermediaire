// @flow
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '@components/screens/HomeScreen';
import UserScreen from '@components/screens/UserScreen';

const RootNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
    }),
  },
  User: {
    screen: UserScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'User',
    }),
  },
});

export default RootNavigator;
