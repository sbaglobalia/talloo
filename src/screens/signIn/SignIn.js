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
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="email" size={20} color="gray" style={{}} />
                {/* marginLeft: 20 */}
                <Text style={styles.buttonText}>Continue with Email</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.orTitleText}>or</Text>

            <View style={styles.buttonViewContainer}>
              <TouchableOpacity
                // onPress={() => this._signIn()}
                onPress={_singInWithGoogle}
                style={{
                  flexDirection: 'row',
                  // alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={EVENT_CATEGORY_CONSTANT.GOOGLE}
                  style={{height: '100%', width: '7%'}}
                  resizeMode="contain"
                />
                <Text style={styles.buttonText}>Continue with Google</Text>
              </TouchableOpacity>
            </View>
            {Platform.OS === 'ios' && majorVersionIOS >= 13 ? (
              <View>
                <Text style={styles.orTitleText}>or</Text>
                <View
                  style={[
                    styles.buttonViewContainer,
                    {
                      backgroundColor: 'black',
                      // borderColor: 'red',
                      // borderWidth: 2,
                      // justifyContent: 'center',
                      // width:'100%',
                      height: hp('6%'),
                    },
                  ]}>
                  <TouchableOpacity
                    // onPress={() => this._singInWithApple()}
                    onPress={() => _singInWithApple()}
                    style={{
                      flexDirection: 'row',
                      // alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Ionicons name="apple" size={20} color="white" />
                    <Text
                      style={[styles.buttonText, {color: 'white', height: 20}]}>
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

  // headerContainer: {
  //   // marginTop: '50%',
  //   marginLeft: '10%',
  //   marginRight: '10%',
  //   justifyContent: 'center',
  // },

  buttonViewContainer: {
    backgroundColor: '#F0F0F0',
    // marginLeft: '2%',
    justifyContent: 'center',
    alignContent: 'center',
    // width: 304,
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
    // borderColor:'red',
    // borderWidth:2,
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
    fontSize: 18,
    fontWeight: '700',
  },

  orTitleText: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'black',
    marginTop: '3%',
    marginBottom: 10,
    fontWeight: '500',
  },
});
