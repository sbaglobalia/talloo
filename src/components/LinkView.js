import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import FastImage from 'react-native-fast-image';

export default function LinkView(props) {
  return (
    <View>
      {props.isShowLine == undefined ? <View style={style.lineView} /> : null}

      <View style={[style.container, props.containerStyle]}>
        <View
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            position: 'absolute',
            left: 10,
          }}>
          <FastImage
            resizeMode={FastImage.resizeMode.contain}
            source={props.img}
            style={[style.imageStyle, props.imgStyle]}
          />
        </View>

        {props.isemail ? (
          <View style={{}}>
            <Text
              style={[style.textStyle, props.textStyle]}
              numberOfLines={1}
              minimumFontScale={0.01}>
              {props.text}
            </Text>
            <Text
              style={[style.textStyle, props.textStyle]}
              numberOfLines={1}
              minimumFontScale={0.01}>
              {props.textDec}
            </Text>
          </View>
        ) : (
          <View>
            <Text style={[style.textStyle, props.textStyle]}>{props.text}</Text>
            <Text style={[style.textStyle1, props.textStyle]}>
              {props.textDec}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    //marginBottom: 20
    // margin: 10,
    // borderWidth:1
  },
  imageStyle: {
    height: 20,
    width: 20,
    marginTop: -15,
  },
  textStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
    //marginTop: 5,
    marginLeft: 55,
  },
  textStyle1: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
    //marginTop: 5,
    marginLeft: 55,
    justifyContent: 'center',
  },
  lineView: {
    // marginTop: 10,
    marginBottom: 0,
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
  },
});
