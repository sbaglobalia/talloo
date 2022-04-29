import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function KeywordView(props) {
  const styles = makeStyles();
  return (
    <TouchableOpacity style={styles.touchable} onPress={props.onPress}>
      <View style={styles.view}>
        <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const makeStyles = () => {
  return StyleSheet.create({
    view: {
      flexDirection: 'row',
      borderRadius: 15,
      borderColor: KeywordView.props.borderColor,
      borderWidth: 2,
      backgroundColor: this.props.backgroundColor,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 16,
      paddingRight: 16,
      shadowOffset: {height: 0, width: 0},
      shadowColor: 'gray',
      shadowOpacity: 0.5,
    },
    touchable: {
      marginLeft: 4,
      marginRight: 4,
      marginBottom: 8,
    },
    image: {
      marginRight: 8,
    },
    text: {
      textAlign: 'center',
      color: KeywordView.props.textColor,
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
};
