// Dependancies
import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CustomTextfield=(props)=> {
  return (
    <View style={[styles.sectionView, props.containerStyle]}>
      <Text
        style={[
          styles.subTitleText,
          {color: props.isInvalid ? '#DD0000' : 'black'},
        ]}>
        {props.title}
      </Text>
      <TextInput
        key={props.key}
        // ref={(input) => inputRef && inputRef(input)}
        placeholder={props.placeHolder != undefined ? placeHolder : ''}
        style={[
          styles.input,
          {
            borderColor: props.isInvalid ? '#DD0000' : 'lightgray',
            borderWidth: props.isInvalid ? 1 : 1,
          },
          props.inputStyle,
        ]}
        autoCapitalize={props.capitalize}
        onChangeText={props.onChangeText}
        value={props.textValue}
        keyboardType={props.keyboard}
        secureTextEntry={props.secureText}
        editable={props.isEditable == undefined ? true : props.isEditable}
        returnKeyType={props.returnKeyType}
        onSubmitEditing={event => {
          props.onSubmitEditing != undefined ? onSubmitEditing(event) : null;
        }}
        onFocus={event => {
          props.onFocus != undefined ? onFocus() : null;
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
  },
  subTitleText: {
    fontSize: wp('5%'),
    color: 'black',
    fontWeight: '500',
    marginTop: wp('1%'),
  },
  input: {
    width: wp('90%'),
    height: hp('5.5%'),
    backgroundColor: '#fff',
    padding: wp('2%'),
    color: 'black',
    borderRadius: wp('2%'),
    fontSize: wp('5%'),
    fontWeight: 'bold',
    borderColor: 'blue',
  },
});
