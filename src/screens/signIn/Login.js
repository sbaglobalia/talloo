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

  return (
    <>
      {error ? alert(error) : null}

      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
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
                  style={[styles.buttonView, {backgroundColor: '#DD0000'}]}
                  // onPress={showMessage}
                >
                  <Text style={[styles.buttonText, {color: 'white'}]}>
                    SIGN UP
                  </Text>
                </TouchableOpacity>

                <Text
                  style={[
                    styles.subTitleText,
                    {alignSelf: 'center', marginTop: 15, fontSize: 20},
                  ]}>
                  OR
                </Text>

                <CustomTextfield
                  title="Email"
                  // onChangeText={val => this.onChangeText('email', val)}
                  value={email}
                  onChangeText={value => onChangeText(value, 'email')}
                  capitalize="none"
                  textValue={email}
                  keyboard="email-address"
                  secureText={false}
                />
                <CustomTextfield
                  title="Password"
                  // onChangeText={val => this.onChangeText('password', val)}
                  value={password}
                  onChangeText={value => onChangeText(value, 'password')}
                  capitalize="none"
                  textValue={password}
                  keyboard="default"
                  secureText={true}
                />

                <TouchableOpacity
                  style={[
                    styles.buttonView,
                    {backgroundColor: '#DD0000', marginTop: 30},
                  ]}
                  // onPress={handleLogin}
                >
                  <Text style={[styles.buttonText, {color: 'white'}]}>
                    LOGIN
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <View
                    style={{
                      alignSelf: 'center',
                      marginTop: 20,
                      marginBottom: 10,
                    }}>
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
  subTitleText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    marginTop: 5,
  },
});
