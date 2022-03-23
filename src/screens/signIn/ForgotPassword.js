import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {
  setKeyForValue,
  sendMail,
  showAlert,
  validateEmail,
} from '../../helper/CommonHelper';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import SignupHeader from '../../components/SingupHeader';
import ParsedText from 'react-native-parsed-text';
import CustomTextfield from '../../components/CustomTextfield';
import {useState} from 'react';

// const [email, setEmail] = useState('');

export default function ForgotPassword() {
  const [state, setState] = useState({
    email: '',
    errorMessage: '',
    isAgree: false,
  });

  const sendPasswordCode = async () => {
    alert('Password Sent...');
  };

  const onChangeText = (key, val) => {
    this.setState({[key]: val});
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
        enabled
        keyboardVerticalOffset={20}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <View>
            <SignupHeader
              title="Forgot password"
              subtitle="Enter your email address to recover your password. We will send a text message to your mobile device."
            />

            <ParsedText
              style={[
                styles.titleText,
                {marginLeft: 20, marginRight: 20, fontWeight: '600'},
              ]}
              parse={[
                {
                  pattern: /Bob|contact support/,
                  style: {color: '#DD0000'},
                  onPress: sendMail,
                },
              ]}>
              If you lose access to your mobile phone, contact support.
            </ParsedText>

            <View style={styles.signInContainer}>
              <CustomTextfield
                title="Email"
                onChangeText={val => onChangeText('email', val)}
                capitalize="none"
                // textValue={state.email}
                keyboard="email-address"
                secureText={false}
              />
              <CustomButton
                buttonText="SEND PASSWORD"
                handleClick={sendPasswordCode}
                selected={true}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  headerContainer: {
    marginTop: 150,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-around',
  },

  buttonView: {
    width: '85%',
    height: 45,
    backgroundColor: '#DD0000',
    borderRadius: 25,
    borderColor: '#DD0000',
    marginTop: 10,
    //borderWidth: 1
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },

  signInContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },

  headerIcon: {
    height: 40,
    width: 40,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    //padding: 8,
    alignSelf: 'center',
    textAlign: 'center',
  },

  headerText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
  },

  titleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },

  sectionView: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    marginTop: 10,
  },
  inputTitleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitleText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    marginTop: 5,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    padding: 8,
    borderRadius: 10,
    borderColor: 'lightgray',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});
