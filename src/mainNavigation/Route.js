import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signIn/SignUp';
import Login from '../screens/signIn/Login';
import ForgotPassword from '../screens/signIn/ForgotPassword';
import AddEvent from '../screens/addEvent/AddEvent';
import CreateProfile from '../screens/profile/CreateProfile';
import Profile from '../screens/profile/Profile';
import TeamProfile from '../screens/profile/TeamProfile';
import TeamDetails from '../screens/Teams/TeamDetails';
import Contact from '../screens/contact/Contact';
import ContactProfile from '../screens/contact/ContactProfile';
import BottomTab from '../mainNavigation/BottomTab';
import SplashScreen from '../screens/SplashScreen';
import Message from '../screens/message/ChatList';
import ChatView from '../screens/message/ChatView';
import ChatInput from '../screens/message/ChatInput';

const Stack = createNativeStackNavigator();

const Route = () => {
  const [auth, setAuth] = useState(false);

  return (
    <NavigationContainer>
      {auth == true ? (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash Screen" component={SplashScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="CreateProfile" component={CreateProfile} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="TeamProfile" component={TeamProfile} />
          <Stack.Screen name="TeamDetails" component={TeamDetails} />
          <Stack.Screen name="AddEvent" component={AddEvent} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ContactProfile" component={ContactProfile} />
          <Stack.Screen name="Message" component={Message} />
          <Stack.Screen name="ChatView" component={ChatView} />
          <Stack.Screen name="ChatInput" component={ChatInput} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Route;
