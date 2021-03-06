import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/AntDesign';
import SignupHeader from '../../components/SingupHeader';
import PhoneInput from 'react-native-phone-number-input';
import ParsedText from 'react-native-parsed-text';
import {CustomTextfield} from '../../components/CustomTextfield';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [phoneNumberFormat, setPhoneNumberFormat] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showCaptch, setShowCaptch] = useState(false);
  const [captchVerifier, setCaptchVerifier] = useState('');
  // const [userValidation, setuserValidation] = useState([
  //   {
  //     type: 'firstname',
  //     isInvalid: false,
  //   },
  //   {
  //     type: 'lastname',
  //     isInvalid: false,
  //   },
  //   {
  //     type: 'phoneNumberFormat',
  //     isInvalid: false,
  //   },
  //   {
  //     type: 'password',
  //     isInvalid: false,
  //   },
  //   {
  //     type: 'email',
  //     isInvalid: false,
  //   },
  // ]);
  console.log('First Name::', firstname);
  console.log('Last Name::', lastname);
  console.log('Email ::', email);
  console.log('Pass::', password);

  // const onMessage = async event => {
  //   const token = event;
  //   SignUp.captchaForm.hide();
  //   const captchaVerifier = {
  //     type: 'recaptcha',
  //     verify: () => Promise.resolve(token),
  //   };
  // const [text, onChangeText] = useState('');
  // console.log('onchangeText', onChangeText);
  // const [number, onChangeNumber] = useState(null);
  return (
    <>
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid enableAutomaticScroll>
          <SignupHeader
            title="Let's get started"
            subtitle="All fields are required. We'll use your mobile number to recover your account if you ever forget your password."
          />
          <View style={styles.signInContainer}>
            <View>
              <CustomTextfield
                title="First Name"
                onChangeText={val => setFirstname(val)}
                capitalize="sentences"
                textValue={firstname}
                keyboard="default"
                returnKeyType={'next'}
                secureText={false}
                // inputRef={instance => (firstnameRef = instance)}
                // onSubmitEditing={() => lastnameRef.focus()}
              />
              <CustomTextfield
                title="Last Name"
                onChangeText={val => setLastname(val)}
                capitalize="sentences"
                textValue={lastname}
                keyboard="default"
                returnKeyType={'next'}
                secureText={false}
                // inputRef={instance => (lastnameRef = instance)}
                // onSubmitEditing={() => lastnameRef.focus()}
              />
              <CustomTextfield
                title="Work Email"
                onChangeText={val => setEmail(val)}
                capitalize="sentences"
                textValue={email}
                keyboard="default"
                returnKeyType={'next'}
                secureText={false}
                // inputRef={instance => (emailRef = instance)}
                // onSubmitEditing={() => emailRef.focus()}
              />
              <CustomTextfield
                title="Password"
                onChangeText={val => setPassword(val)}
                capitalize="sentences"
                textValue={password}
                keyboard="default"
                returnKeyType={'next'}
                secureText={false}
              />

              <View>
                <Text style={[styles.mobileNumber]}>Mobile Number</Text>
              </View>
              <PhoneInput
                defaultCode="US"
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.textInput}
              />
            </View>
            <CustomButton
              buttonText="CONTINUE"
              // handleClick={handleSignUp}
              selected={true}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  signInContainer: {
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    // borderColor: 'red',
    // borderWidth: 2,
  },

  // subTitleText: {
  //   fontSize: 18,
  //   color: 'black',
  //   // fontWeight: '600',
  //   // marginTop: 5,
  // },
  phoneContainer: {
    // width: '100%',
    width: wp('90%'),
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    marginTop: hp('1%'),
  },
  textInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
  mobileNumber: {
    // fontWeight: 'bold',
    fontSize: wp('5%'),
    marginTop: hp('1%'),
  },
});
