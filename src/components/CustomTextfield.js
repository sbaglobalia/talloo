// Dependancies
import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export function CustomTextfield(props) {
  const {
    title,
    onChangeText,
    capitalize,
    textValue,
    keyboard,
    secureText,
    isEditable,
    placeHolder,
    returnKeyType,
    onSubmitEditing,
    inputRef,
    containerStyle,
    key,
    inputStyle,
    isInvalid,
    onFocus,
  } = props;
  return (
    <View style={[styles.sectionView, containerStyle]}>
      <Text
        style={[styles.subTitleText, {color: isInvalid ? '#DD0000' : 'black'}]}>
        {title}
      </Text>
      <TextInput
        key={key}
        ref={input => inputRef && inputRef(input)}
        placeholder={placeHolder != undefined ? placeHolder : ''}
        style={[
          styles.input,
          {
            borderColor: isInvalid ? '#DD0000' : 'lightgray',
            borderWidth: isInvalid ? 1 : 1,
          },
          inputStyle,
        ]}
        autoCapitalize={capitalize}
        onChangeText={onChangeText}
        value={textValue}
        keyboardType={keyboard}
        secureTextEntry={secureText}
        editable={isEditable == undefined ? true : isEditable}
        returnKeyType={returnKeyType}
        onSubmitEditing={event => {
          onSubmitEditing != undefined ? onSubmitEditing(event) : null;
        }}
        onFocus={event => {
          onFocus != undefined ? onFocus() : null;
        }}
        blurOnSubmit={false}
        selectionColor="#000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionView: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    //width: '100%',
    // marginTop: 10,
    //flex: 1
  },
  subTitleText: {
    fontSize: wp('5%'),
    color: 'black',
    fontWeight: '500',
    marginTop: wp('1%'),
  },
  input: {
    width: wp('90%'),
    height: hp('6%'),
    backgroundColor: '#fff',
    padding: wp('2%'),
    color: 'black',
    borderRadius: wp('2%'),
    fontSize: wp('5%'),
    fontWeight: 'bold',
    borderColor: 'blue',
  },
});
