import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

export default function OfflineNotice() {
  const [isConnected, setIsConnected] = useState(true);
  const [unsubscribe, setUnsubscribe] = useState('');
  const [subscribe, setSubscribe] = useState('');

  const handleConnectivityChange = isConnected => {
    setIsConnected({isConnected});
  };

  useEffect(() => {
    unsubscribe = NetInfo.addEventListener(()=>handleConnectivityChange);
  },[unsubscribe]);

  return (
    <View>
      <Text>OfflineNotice</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#DD0000',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width,
    position: 'absolute',
    top: 30,
  },
  offlineText: {color: '#fff'},
});
