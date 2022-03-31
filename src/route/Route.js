import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';
import Home from '../screens/home/Home';
import People from '../screens/people/People';
import SignIn from '../screens/signIn/SignIn';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons';

const Tab = createBottomTabNavigator(
  {
    Home: {screen: Home},
    People: {screen: People},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          focused ? (
            <Image
              source={require('../../assets/sel_today.png')}
              style={{height: 30, width: 30}}
            />
          ) : (
            <Image
              source={require('../../assets/unsel_today.png')}
              style={{height: 30, width: 30}}
            />
          );
        } else if (routeName === 'People') {
          focused ? (
            <Image
              source={require('../../assets/sel_user.png')}
              style={{height: 30, width: 30}}
            />
          ) : (
            <Image
              source={require('../../assets/unsel_user.png')}
              style={{height: 30, width: 30}}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const Route = createStackNavigator(
  {
    SignIn: {screen: SignIn},
    Tab: {screen: Tab},
  },
  {
    index: 0,
    initialRouteName: 'SignIn',
    headerMode: 'none',
  },
);
