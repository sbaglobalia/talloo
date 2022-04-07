import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signIn/SignUp';
import Login from '../screens/signIn/Login';
import ForgotPassword from '../screens/signIn/ForgotPassword';
import AddEvent from '../screens/addEvent/AddEvent';
import CreateProfile from '../screens/profile/CreateProfile';
import Profile from '../screens/profile/Profile';
import Contact from '../screens/contact/Contact';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Route = () => {

  const [auth, setAuth] = useState(false)

  return (
    <NavigationContainer>
      {auth == true ? (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="CreateProfile" component={CreateProfile} />
          <Stack.Screen name="AddEvent" component={AddEvent} />
        </Stack.Navigator>

      )}





    </NavigationContainer>
  );
};

export default Route;
