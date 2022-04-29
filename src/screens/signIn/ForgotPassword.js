import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import SignupHeader from '../../components/SingupHeader';
import CustomTextfield from '../../components/CustomTextfield';
import CustomButton from '../../components/CustomButton';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.subContainer}
        keyboardVerticalOffset={20}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <SignupHeader
            title="Forgot Password"
            subtitle="Enter your email address to recover your password. We will send a text message to your mobile device."
          />

          <View style={styles.warningText}>
            <Text style={styles.titleText}>
              If you lose access to your mobile phone,
            </Text>
            <TouchableOpacity>
              <Text style={styles.contactSupport}>contact support.</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signInContainer}>
            <CustomTextfield
              title="Email"
              onChangeText={val => setEmail('email', val)}
              capitalize="none"
              keyboard="email-address"
              returnKeyType={'done'}
              secureText={false}
              textValue={email}
            />
            <CustomButton buttonText="SEND PASSWORD" selected={true} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {flex: 1, flexDirection: 'column', justifyContent: 'center'},
  warningText: {bottom: '10%'},
  signInContainer: {
    // marginLeft: 20,
    marginRight: 20,
    bottom: '5%',
    marginLeft: hp('2%'),
  },

  titleText: {
    fontWeight: '600',
    fontSize: hp('2.2%'),
    marginTop: '5%',
    marginLeft: hp('2%'),
  },
  contactSupport: {
    fontWeight: '600',
    fontSize: hp('2.2%'),
    color: 'red',
    marginLeft: hp('2%'),
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
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
