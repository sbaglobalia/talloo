import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Touchable,
} from 'react-native';
import {
  TAB_FOOTER_IMAGE_CONSTANT,
  EVENT_IMAGE_CONSTANT,
  PROFILE_IMAGE_CONSTANT,
  NEW_PROFILE_IMG,
  MID_MARKET_PLAN,
  MAIN_STREET_PLAN,
  FREE_PLAN,
} from '../utils/Constant';
const WIDTH = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';


 export default function CustomFooter(props) {

  _renderTallooUserEvent = (props) => {
    const {duplicateEvenet, updateEvent, deleteEvent, shareEvent, isGoing} =
      props;
    <View
      style={styles.container}
      >
      <View
        style={styles.subContainer}>
        <TouchableOpacity
          style={[
            style.buttonContainer,
            {
              backgroundColor: 'white',
              borderColor: 'black',
              // borderWidth: 2,
              marginRight: WIDTH * 0.02,
            },
          ]}
          onPress={deleteEvent}>
          <Image
            source={EVENT_IMAGE_CONSTANT.EVENT_DELETE}
            style={style.imageContainer}
            resizeMode="contain"
          />
        </TouchableOpacity>
  
        <TouchableOpacity
          style={[
            styles.buttonContainer,styles.buttonContainerTouchable
          ]}
          onPress={duplicateEvent}>
          <Image
            source={EVENT_IMAGE_CONSTANT.EVENT_DUPLICATE}
            style={styles.imageContainer}
            resizeMode="contain"
          />
        </TouchableOpacity>
  
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            styles.buttonContainerTouchable
          ]}
          onPress={updateEvent}>
          <Image
            source={EVENT_IMAGE_CONSTANT.EVENT_EDIT}
            style={style.imageContainer}
            resizeMode="contain"
          />
        </TouchableOpacity>
  
        <TouchableOpacity
          style={[
            styles.buttonContainer,styles.shareEventTouchable
          ]}
          onPress={shareEvent}>
          <Icon name="share" size={WIDTH * 0.06} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>;
  };
  
  _renderJoinOnlineEvent = (props) => {
    const { joinOnlineEvent } = props;
    return (
      <View style={styles.rightViewContainer}>
        <Text style={styles.eventText}>{'Join Online Event'}</Text>
        <TouchableOpacity style={[styles.buttonContainer, styles.redColor]} onPress={joinOnlineEvent}>
          <Image
            source={EVENT_IMAGE_CONSTANT.EVENT_ANGEL_RIGHT}
            style={styles.imgSize}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    )
  }
  
  _renderAddEvent = (props) => {
    const { addEvent, eventTitle } = props;
    return (
      <View style={styles.rightViewContainer}>
  
        <TouchableOpacity style={[style.buttonContainer, { backgroundColor: '#000' }]} onPress={addEvent}>
          <Text style={[styles.eventText, {color: '#fff'} ]}>{eventTitle}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  _renderProfileShare = (props) => {
    const { shareProfile, isSaved, saveProfile, } = props;
    return(
      <View style={styles.container}>
      <View style={styles.subContainer}>
      <TouchableOpacity style={styles.buttonContainer}
      onPress={shareProfile}>
      <Image
      source={NEW_PROFILE_IMG.EXTERNAL}
      style={style.imageContainer}
      resizeMode='contain'/>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonContainer,{
        backgroundColor: 'black',marginRight: WIDTH * 0.02
      }]}
      onPress={saveProfile}>
      <Image
      source={isSaved ? PROFILE_IMAGE_CONSTANT.SAVE_PROFILE : PROFILE_IMAGE_CONSTANT.UNSAVE_PROFILE}
      style={style.imageContainer}
      resizeMode='contain'
      />
      
      </TouchableOpacity>
      </View>
      </View>
    )
  

    
   const { navigation, isGoing, isBack, isChat,
    navigateTochat, showEvent, handleClick,
    isTalloo, showOnlineEvent, showSaveEvent,
    isProfile, shareEvent, plan, isEnableProfile, url } = props;

    <View style={}>
    </View>
    
  );
}

const styles = StyleSheet.create({
 container: {
        alignSelf: 'flex-end',
        marginRight: 15,
 },
 subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH * 0.30,
    height: WIDTH * 0.10,
    borderRadius: parseInt((WIDTH * 0.12) / 5),
  },
  imageContainer: {
    width: WIDTH * 0.05,
    height: WIDTH * 0.05,
    alignSelf: 'center',
  },
  rightViewContainer: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 15,
    flexDirection: 'row'
  },
  buttonContainerTouchable: {
    backgroundColor: 'white',
    borderColor: 'black',
    // borderWidth: 2,
    marginRight: WIDTH * 0.02
  },
  eventText: { 
    fontSize: WIDTH * 0.04, 
    fontWeight: '700', 
    marginRight: WIDTH * 0.02 
  },
  redColor: {
    backgroundColor: '#DD0000',
  },
  shareEventTouchable: {
    // backgroundColor: redColor,
      backgroundColor: '#DD0000',
      marginRight: WIDTH * 0.02,
    },
    imgSize:  {
      width: WIDTH * 0.06,
      height: WIDTH * 0.06 
    },
    customElements
}
);
