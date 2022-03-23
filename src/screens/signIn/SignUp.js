import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/CustomButton';
import Icon from 'react-native-vector-icons/AntDesign';
import SignupHeader from '../../components/SingupHeader';
import PhoneInput from 'react-native-phone-number-input';
import ParsedText from 'react-native-parsed-text';
import CustomTextfield from '../../components/CustomTextfield';

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
  const [userValidation, setuserValidation] = useState([
    {
      type: 'firstname',
      isInvalid: false,
    },
    {
      type: 'lastname',
      isInvalid: false,
    },
    {
      type: 'phoneNumberFormat',
      isInvalid: false,
    },
    {
      type: 'password',
      isInvalid: false,
    },
    {
      type: 'email',
      isInvalid: false,
    },
  ]);

  // const onMessage = async event => {
  //   const token = event;
  //   SignUp.captchaForm.hide();
  //   const captchaVerifier = {
  //     type: 'recaptcha',
  //     verify: () => Promise.resolve(token),
  //   };

  return (
    <>
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid enableAutomaticScroll>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.Alert_Main_View}>
              <Text
                style={[
                  styles.subTitleText,
                  {fontWeight: 'bold', fontSize: 20, marginTop: 10},
                ]}>
                {' '}
                Mobile Number{' '}
              </Text>
              <Text
                style={[
                  styles.subTitleText,
                  {
                    marginLeft: 10,
                    marginRight: 10,
                    textAlign: 'center',
                  },
                ]}>
                We use your mobile number to verify your account and to remind
                you of your password.
              </Text>
              <Text
                style={[
                  styles.subTitleText,
                  {
                    marginLeft: 10,
                    marginRight: 10,
                    textAlign: 'center',
                    marginTop: 10,
                  },
                ]}>
                Talloo is available internationally.
              </Text>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: 'lightgray',
                  marginTop: 10,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginBottom: 0,
                  height: 50,
                }}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => setIsModalVisible({isModalVisible: false})}
                  activeOpacity={0.7}>
                  <Text style={[styles.subTitleText, {textAlign: 'center'}]}>
                    {' '}
                    DISMISS{' '}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: 1,
                    height: '100%',
                    backgroundColor: 'lightgray',
                  }}
                />
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => setIsModalVisible({isModalVisible: false})}
                  activeOpacity={0.7}>
                  <Text style={[styles.subTitleText, {textAlign: 'center'}]}>
                    {' '}
                    OK{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <SignupHeader
            title="Let's get started"
            subtitle="All fields are required. We'll use your mobile number to recover your account if you ever forget your password."
          />
          <View style={styles.signInContainer}>
            <View style={styles.sectionView}>
              <CustomTextfield
                title="First Name"
                // onChangeText={val => onChangeText('firstname', val)}
                capitalize="sentences"
                // textValue={firstname}
                keyboard="default"
                returnKeyType={'next'}
                // inputRef={instance => (this.firstnameRef = instance)}
                // onSubmitEditing={() => this.lastnameRef.focus()}
                secureText={false}
                isInvalid={
                  this.state.firstname.trim() == '' &&
                  userValidation.find(
                    e => e.isInvalid == true && e.type == 'firstname',
                  )
                    ? true
                    : false
                }
              />
              <CustomTextfield
                title="Last Name"
                // onChangeText={val => this.onChangeText('lastname', val)}
                capitalize="sentences"
                // textValue={this.state.lastname}
                keyboard="default"
                secureText={false}
                // inputRef={instance => (this.lastnameRef = instance)}
                // onSubmitEditing={() => this.emailRef.focus()}
                returnKeyType={'next'}
                isInvalid={
                  // this.state.lastname.trim() == '' &&
                  userValidation.find(
                    e => e.isInvalid == true && e.type == 'lastname',
                  )
                    ? true
                    : false
                }
              />

              <CustomTextfield
                title="Work Email"
                // onChangeText={val => onChangeText('email', val)}
                capitalize="none"
                // textValue={this.state.email}
                keyboard="email-address"
                secureText={false}
                // inputRef={instance => (this.emailRef = instance)}
                // onSubmitEditing={() => this.passwordRef.focus()}
                returnKeyType={'next'}
                isInvalid={
                  // (this.state.email.trim() === '' ||
                  // (this.state.email.trim() != '' &&
                  // !validateEmail(this.state.email))) &&
                  userValidation.find(
                    e => e.isInvalid == true && e.type == 'email',
                  )
                    ? true
                    : false
                }
              />

              <CustomTextfield
                title="Password"
                // onChangeText={val => this.onChangeText('password', val)}
                capitalize="none"
                textValue={this.state.password}
                keyboard="default"
                secureText={true}
                // inputRef={instance => (this.passwordRef = instance)}
                //onSubmitEditing={() => this.phoneRef.focus()}
                returnKeyType={'next'}
                isInvalid={
                  // this.state.password.trim() == '' &&
                  userValidation.find(
                    e => e.isInvalid == true && e.type == 'password',
                  )
                    ? true
                    : false
                }
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}>
                <ParsedText
                  style={{
                    marginRight: 12,
                    fontSize: 18,
                    color:
                      SignUp.state.phoneNumberFormat.trim() == '' &&
                      userValidation.find(
                        e =>
                          e.isInvalid == true && e.type == 'phoneNumberFormat',
                      )
                        ? '#DD0000'
                        : 'black', //'black',
                    fontWeight: '600',
                  }}
                  parse={[
                    {
                      pattern: /Bob|U.S Mobile Required/,
                      style: {color: '#DD0000'},
                    },
                  ]}>
                  Mobile Number
                </ParsedText>
                <TouchableOpacity
                  style={{marginLeft: 'auto', right: 0, marginTop: 5}}
                  onPress={() => setIsModalVisible({isModalVisible: true})}>
                  <Icon name="questioncircle" size={20} />
                </TouchableOpacity>
              </View>
              <PhoneInput
                // ref={phoneInput}
                // defaultValue={this.state.phoneNumberFormat}
                defaultCode="US"
                // layout="first"
                // withShadow
                autoFocus
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.textInput}
                // onChangeFormattedText={text => {setphoneNumber(text);
                onChangeFormattedText={phoneNumberFormat =>
                  setPhoneNumberFormat({phoneNumberFormat})
                }
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
    marginTop: 20,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
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
  Alert_Main_View: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    minHeight: 200,
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 7,
  },

  Alert_Title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    height: '28%',
  },

  Alert_Message: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 5,
  },
  Alert_SubMessage: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  buttonStyle: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneContainer: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#F0F0F0',
    marginTop: 5,
  },
  textInput: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
});
