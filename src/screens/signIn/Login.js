// Dependencies
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import SingupHeader from '../../components/SingupHeader';

import {CustomTextfield} from '../../components/CustomTextfield';

export default function Login({navigation}) {
  const [error, setError] = useState('');

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const {email, password} = userInfo;

  const onChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
    // console.log(userInfo);
  };

  const handleLogin = () => {
    if (
      userInfo.email === 'email@gmail.com' &&
      userInfo.password === 'password'
    )
      // --> "Goto Home Screen"
      navigation.navigate('Home');
    else alert('Invalid User');
  };
  return (
    <>
      {error ? alert(error) : null}

      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.subContainer}
          enabled
          keyboardVerticalOffset={20}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView>
            <View>
              <SingupHeader
                title="Email"
                subtitle="Login with your email address and password or create your free account."
              />

              <View style={styles.signInContainer}>
                <TouchableOpacity
                  style={[styles.buttonView, styles.buttonView1]}
                  // onPress={showMessage}
                  onPress={() => navigation.navigate('CreateProfile')}>
                  <Text style={[styles.buttonText, styles.subButtonText]}>
                    SIGN UP
                  </Text>
                </TouchableOpacity>

                <Text style={[styles.subTitleText, styles.orText]}>OR</Text>

                <CustomTextfield
                  title="Email"
                  // onChangeText={val => onChangeText('email', val)}
                  value={email}
                  onChangeText={value => onChangeText(value, 'email')}
                  capitalize="none"
                  textValue={email}
                  keyboard="email-address"
                  secureText={false}
                  returnKeyType="next"
                />
                <CustomTextfield
                  title="Password"
                  // onChangeText={val => onChangeText('password', val)}
                  value={password}
                  onChangeText={value => onChangeText(value, 'password')}
                  capitalize="none"
                  textValue={password}
                  keyboard="default"
                  secureText={true}
                  returnKeyType="done"
                />

                <TouchableOpacity
                  style={[styles.buttonView, styles.loginTouchable]}
                  onPress={handleLogin}>
                  <Text style={[styles.buttonText, styles.LoginText]}>
                    LOGIN
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <View style={styles.forgotView}>
                    <Text style={styles.subTitleText}>Forgot password?</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {flex: 1, flexDirection: 'column', justifyContent: 'center'},
  buttonView: {
    width: wp('80%'),
    borderWidth: 2,
    height: 45,
    backgroundColor: '#DD0000',
    borderRadius: 25,
    borderColor: '#DD0000',
    marginTop: hp('1%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  loginTouchable: {backgroundColor: '#DD0000', marginTop: 30},
  buttonView1: {backgroundColor: '#DD0000'},

  signInContainer: {
    marginLeft: wp('4%'),
    marginRight: wp('4%'),
  },
  buttonText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
  LoginText: {color: 'white'},
  forgotView: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  subButtonText: {color: 'white'},
  subTitleText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    marginTop: 5,
  },
  orText: {alignSelf: 'center', marginTop: 15, fontSize: 20},
});
