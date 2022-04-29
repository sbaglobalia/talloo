import React, {useEffect, useState} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SignIn from './signIn/SignIn';

export default function SplashScreen() {
  const navigation = useNavigation();
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SignIn);
      setShow(false);
    }, 2000);
  });

  //   useEffect(() => {
  //     setTimeout(() => {
  //       navigation.navigate(SignIn);
  //       SplashScreen.hide();
  //     }, 3000);
  //   }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Talloo.png')}
        style={{width: 100, height: 100}}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
