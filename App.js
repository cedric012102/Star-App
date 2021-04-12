import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import LogInScreen from './src/screens/LoginScreen.js';
import SignupScreen from './src/screens/SignupScreen';
import NewsScreen from './src/screens/NewsScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import CreateScreen from './src/screens/CreateScreen';
import AccountScreen from './src/screens/AccountScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';


const switchNavigator = createSwitchNavigator({
  loginFlow: createSwitchNavigator({
    Signup: SignupScreen,
    Login: LogInScreen
  }), 
  mainFlow: createBottomTabNavigator({
    NewsScreenFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    Create: CreateScreen,
    Account: AccountScreen
  })
});




const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App ref={(navigator) => { setNavigator(navigator) }}
      />
    </AuthProvider>
  );
};
