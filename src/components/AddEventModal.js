import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

export default function AddEventModal() {
  const [show, setShow] = useState(false);
  const [isChat, setIsChat] = useState(false);
  const [disableColor, setDisableColor] = useState('black');
  const [isExplore, setIsExplore] = useState(false);
  const [isReferral, setIsReferral] = useState(false);

//   const isShow = () => {
//     setShow(!isShow);
//   };

//   show = () => {};

  return (
    <View>
      <Text>AddEventModal</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
