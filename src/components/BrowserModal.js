import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import {WebView} from 'react-native-webview';
import PropTypes from 'prop-types';

const {width, height} = Dimensions.get('window');

export default function BrowserModal(props) {
  const [show1, setShow1] = useState(false);

  const show = () => {
    setShow1({show1: true});
  };
  const hide = () => {
    setShow1({show1: false});
  };
  return (
    <Modal
      useNativeDriver
      hideModalContentWhileAnimating
      deviceHeight={height}
      deviceWidth={width}
      style={styles.modal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={show1}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={styles.showStyle}
          onPress={() => setShow1({show: false})}>
          <Icon name="close" size={30} color="white" />
        </TouchableOpacity>

        <WebView source={{uri: props.url}} style={{marginTop: 5}} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
  },
  modal: {margin: 0},
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  showStyle: {alignSelf: 'flex-start', marginTop: 30, right: 15},
});
BrowserModal.propTypes = {
  // url: PropTypes.string.isRequired,
  url: 'https://github.com/facebook/react-native',
};
