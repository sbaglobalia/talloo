import {StyleSheet, TouchableHighlight, Image} from 'react-native';
import React from 'react';

export default function CommanRadiusButton(props) {
  const {buttonStyle, imageStyle, onPress, imageSource} = props;
  return (
    <TouchableHighlight
      style={[styles.angelButton, buttonStyle]}
      onPress={onPress}
      underlayColor="#f1f1f1">
      <Image style={[styles.angelImage, imageStyle]} source={imageSource} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  angelButton: {
    marginTop: 15,
    width: 30,
    height: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowOffset: {height: 0, width: 0},
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  angelImage: {
    width: 15,
    height: 20,
    alignSelf: 'center',
  },
});
