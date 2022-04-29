import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from './MyTabBar';
import Contact from '../screens/contact/Contact';
import Groups from '../screens/Teams/Groups';
import Events from '../screens/allEvents/Events';
// import Message from '../screens/message/ChatList';
import Message from '../screens/message/ChatList';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="contact"
        component={Contact}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Groups"
        component={Groups}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
