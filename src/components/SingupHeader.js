import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {EVENT_CATEGORY_CONSTANT} from '../../../talloo/src/utils/Constant';

export default function SingupHeader(props) {
  const {title, subtitle} = props;
  return (
    <View style={styles.headerContainer}>
      <Image
        source={EVENT_CATEGORY_CONSTANT.TALLOO}
        style={styles.headerIcon}
        resizeMode="contain"
      />
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.titleText}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: '10%',
    marginLeft: '5%',
    marginRight: '5%',
    justifyContent: 'space-around',
  },
  headerIcon: {
    // height: '20%',
    // width: '20%',
    height: hp('12%'),
    width: wp('12%'),
  },
  headerText: {
    color: 'black',
    // fontSize: 30,
    fontWeight: 'bold',
    fontSize: hp('4%'),
    // marginTop: '5%',
    height: hp('5%'),
    width: wp('90%'),
  },
  titleText: {
    color: 'black',
    // fontSize: 18,
    fontWeight: '400',
    fontSize: hp('2.2%'),
    marginTop: hp('2%'),
    // width:wp('90%'),
    height: hp('15%'),
  },
});
