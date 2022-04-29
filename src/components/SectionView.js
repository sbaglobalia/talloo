import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function SectionView(props) {
  const renderHeaderView = () => {
    return (
      <View
        style={[
          styles.container,
          {flexDirection: 'column'},
          props.headerViewStyle,
        ]}>
        <Text style={[styles.headerTitleTextStyle, props.headerTitleStyle]}>
          {props.headerTitle}
        </Text>
        <Text
          style={[styles.titleText, props.headerSubTitleStyle, {marginTop: 5}]}>
          {props.headerSubTitle}
        </Text>
      </View>
    );
  };
  return props.isHeader != undefined ? (
    renderHeaderView()
  ) : (
    <View style={[styles.container, props.viewStyle]}>
      <Text
        style={[styles.titleText, props.textStyle]}
        numberOfLines={1}
        minimumFontScale={0.01}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    width: '100%',
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
    marginLeft: 10,
    alignSelf: 'flex-start',
  },

  headerTitleTextStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
    marginLeft: 10,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
});
