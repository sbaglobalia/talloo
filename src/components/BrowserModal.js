import {StyleSheet, Text, View, Modal} from 'react-native';
import React, {useState} from 'react';

export default function BrowserModal() {
  const [show, setShow] = useState(false);

  return <Modal 
  useNativeDriver/>;
}

const styles = StyleSheet.create({});
