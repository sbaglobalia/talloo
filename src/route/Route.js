import React from 'react';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';
import Home from '../screens/home/Home';
import People from '../screens/people/People';
import SignIn from '../screens/signIn/SignIn';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons';
import {IMAGE_CONSTANT} from '../../../talloo/src/utils/Constant';

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
        if (routeName === 'Home') {
          focused ? (
            <Image
              // source={require('../../assets/sel_today.png')}
              source={IMAGE_CONSTANT.SELECT_TODAY}
              style={{height: 30, width: 30}}
            />
          ) : (
            <Image
              // source={require('../../assets/unsel_today.png')}
              source={IMAGE_CONSTANT.UNSEL_TODAY}
              style={{height: 30, width: 30}}
            />
          );
        } else if (routeName === 'People') {
          focused ? (
            <Image
              // source={require('../../assets/sel_user.png')}
              source={IMAGE_CONSTANT.SEL_USER}
              style={{height: 30, width: 30}}
            />
          ) : (
            <Image
              // source={require('../../assets/unsel_user.png')}
              source={IMAGE_CONSTANT.UNSEL_USER}
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
