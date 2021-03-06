import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import SignIn from '../talloo/src/screens/signIn/SignIn';
import SignUp from '../talloo/src/screens/signIn/SignUp';
import Login from './src/screens/signIn/Login';
import ForgotPassword from '../talloo/src/screens/signIn/ForgotPassword';
import AddEvent from './src/screens/addEvent/AddEvent';
// import verificationCode from './src/screens/signIn/VerificationCode';
import Home from './src/screens/home/Home';
import CreateProfile from './src/screens/profile/CreateProfile';
import Profile from './src/screens/profile/Profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="CreateProfile" component={CreateProfile} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddEvent" component={AddEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
