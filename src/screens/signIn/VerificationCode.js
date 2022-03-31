// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   Linking,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import React, { useState } from 'react';

// export default function verificationCode() {
//   const [magicCode, setmagicCode] = useState('');
//   const [isAgree, setIsAgree] = useState(false);

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import SignupHeader from '../../components/SingupHeader';
import {CustomTextfield} from '../../components/CustomTextfield';
import CustomButton from '../../components/CustomButton';
const ic_check = require('../../../assets/checked.png');
const ic_uncheck = require('../../../assets/unchecked.png');
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function VerificationCode() {
  const [magicCode, setmagicCode] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
        keyboardVerticalOffset={20}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <SignupHeader
            title="Are you a human?"
            subtitle="We sent a text message with a magic code, please enter it below."
          />

          <View style={styles.signInContainer}>
            <CustomTextfield
              title="Magic Code"
              onChangeText={val => setmagicCode(val)}
              capitalize="sentences"
              textValue={magicCode}
              keyboard="default"
              secureText={false}
            />

            <View
              style={[
                styles.sectionView,
                {
                  flexDirection: 'row',
                  alignContent: 'center',
                  alignItems: 'center',
                  marginRight: 20,
                  marginBottom: 20,
                  marginTop: 20,
                  //    borderWidth:1,
                },
              ]}>
              <TouchableOpacity onPress={() => setIsAgree({isAgree: !isAgree})}>
                <Image
                  source={isAgree ? ic_check : ic_uncheck}
                  style={{height: 25, width: 25}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <View>
                <Text style={[styles.subTitleText]}>
                  I agree to the Talloo{' '}
                  <Text style={{color: 'red'}}>Terms of Use</Text> and
                </Text>
                <Text style={[styles.subTitleText, {color: 'red'}]}>
                  Privacy Policy.
                </Text>
              </View>
            </View>

            <CustomButton buttonText="LOGIN" selected={true} />
            <View style={{marginTop: 20}}>
              <Text
                style={[
                  styles.subTitleText,
                  {alignSelf: 'center', marginTop: 10},
                ]}>
                Didn't receive a code?
              </Text>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Text
                  style={[
                    styles.subTitleText,
                    {color: '#DD0000', alignSelf: 'center'},
                  ]}>
                  Try Again
                </Text>
              </TouchableOpacity>

              <Text
                style={[
                  styles.subTitleText,
                  {alignSelf: 'center', marginTop: 20},
                ]}>
                Need help?
              </Text>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Text
                  style={[
                    styles.subTitleText,
                    {color: '#DD0000', alignSelf: 'center'},
                  ]}>
                  Contact Support
                </Text>
              </TouchableOpacity>
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
    backgroundColor: 'white',
  },
  signInContainer: {
    marginRight: 20,
    bottom: '7%',
    marginLeft: hp('2%'),
  },
  sectionView: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    marginTop: 10,
  },
  subTitleText: {
    fontSize: hp('2.2%'),
    color: 'black',
    fontWeight: '600',
    marginTop: 5,
    marginLeft: hp('1%'),
  },
});
