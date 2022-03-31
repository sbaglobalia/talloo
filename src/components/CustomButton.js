import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton(props) {
  const {buttonText, handleClick, selected, buttonStyle} = props;

  return (
    <TouchableOpacity
      style={[
        styles.buttonView,
        {backgroundColor: selected ? '#DD0000' : 'white'},
        buttonStyle,
      ]}
      onPress={handleClick}>
      <Text
        style={[styles.buttonText, {color: selected ? 'white' : '#DD0000'}]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    //padding: 8,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
