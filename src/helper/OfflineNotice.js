import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {showAlert} from './CommonHelper';
import NetInfo from '@react-native-community/netinfo';
const {width} = Dimensions.get('window');

function MiniOfflineSign() {
  return (
    <View>
      <Text>
        {showAlert(
          'No Internet',
          'We could not reach Talloo. Please ensure you are connected to the Internet.',
        )}
      </Text>
    </View>
  );
}
let currentNetwork;

NetInfo.fetch().then(state => {
  currentNetwork = state.isConnected;
});

export default function OfflineNotice() {
  // const [isConnect, setIsConnect] = useState(true);
  // const [connect, setConnect] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = NetInfo.addEventListener(
  //     state => {
  //       handleConnectivityChange();
  //     },
  //     [unsubscribe],
  //   );
  //   return () => {
  //     if (unsubscribe != null) unsubscribe();
  //   };
  // });
  const [netInfo, setNetInfo] = useState(currentNetwork);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  // const handleConnectivityChange = isConnected => {
  //   setConnect({isConnected});
  //   console.log('isConnected', isConnected);
  //   console.log('isConnect', isConnect);
  // };
  return netInfo;
}

// if (!isConnect) {
//   return <MiniOfflineSign />;
// }
// return null;

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
  offlineText: {
    color: '#fff',
  },
});
