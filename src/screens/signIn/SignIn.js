// Dependencies
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Fontisto';

// Screens
import SingupHeader from '../../../../talloo/src/components/SingupHeader';

//Components
import {EVENT_CATEGORY_CONSTANT} from '../../utils/Constant';

const majorVersionIOS = parseInt(Platform.Version, 10);

const SignIn = ({navigation}) => {
  console.log('Hello signIp');
  const _singInWithGoogle = () => {
    Alert.alert('SignIn Screen onPress Called Google');
  };

  const _singInWithApple = () => {
    Alert.alert('SignIn Screen onPress Called Apple');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <StatusBar barStyle="light-content" backgroundColor="#DD0000" />
          <SingupHeader
            title="Welcome"
            subtitle="Meet local professional, entrepreneurs, makers and freelancer, who are the best at what they do, and grow your business."
          />
          <View style={styles.signInContainer}>
            <View style={styles.buttonViewContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={styles.emailTouchable}>
                <Ionicons name="email" size={20} color="gray" />
                {/* marginLeft: 20 */}
                <Text style={styles.buttonText}>Continue with Email</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.orTitleText}>or</Text>

            <View style={styles.buttonViewContainer}>
              <TouchableOpacity
                // onPress={() => _signIn()}
                onPress={_singInWithGoogle}
                style={styles.googleSignIn}>
                <Image
                  source={EVENT_CATEGORY_CONSTANT.GOOGLE}
                  style={styles.googleImage}
                  resizeMode="contain"
                />
                <Text style={styles.buttonText}>Continue with Google</Text>
              </TouchableOpacity>
            </View>
            {Platform.OS === 'ios' && majorVersionIOS >= 13 ? (
              <View>
                <Text style={styles.orTitleText}>or</Text>
                <View
                  style={[styles.buttonViewContainer, styles.appleButtonView]}>
                  <TouchableOpacity
                    // onPress={() => _singInWithApple()}
                    onPress={() => _singInWithApple()}
                    style={styles.appleButtonTouchable}>
                    <Ionicons name="apple" size={20} color="white" />
                    <Text style={[styles.buttonText, styles.bottomTextStyle]}>
                      Sign in with Apple
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  emailTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleSignIn: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleImage: {height: '93%', width: '6%'},
  appleButtonView: {
    backgroundColor: 'black',
    height: hp('6%'),
  },
  appleButtonTouchable: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonViewContainer: {
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignContent: 'center',
    height: hp('6%'),
    marginTop: '1%',
    shadowColor: 'gray',
    borderRadius: wp('2%'),
    width: wp('90%'),
  },

  signInContainer: {
    marginLeft: wp('5%'),
    marginRight: wp('5%'),
    marginTop: hp('5%'),
  },

  // headerIcon: {
  //   height: '20%',
  //   width: '20%',
  //   borderColor: 'blue',
  //   borderWidth: 2,
  // },

  buttonText: {
    color: 'black',
    marginLeft: '3%',
    marginRight: '3%',
    fontWeight: '700',
    // fontSize: 18,
    fontSize: wp('4.5%'),
  },
  bottomTextStyle: {
    color: 'white',
    //   height: 20,
  },

  orTitleText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'black',
    marginTop: '3%',
    // marginBottom: 10,
    marginBottom: hp('1%'),
    fontWeight: '500',
  },
});
