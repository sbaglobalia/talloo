import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  EVENT_IMAGE_CONSTANT,
  PROFILE_IMAGE_CONSTANT,
  NEW_PROFILE_IMG,
  TAB_FOOTER_IMAGE_CONSTANT,
} from '../utils/Constant';
import Icon from 'react-native-vector-icons/Feather';
import {NavigationActions, StackActions} from 'react-navigation';
const WIDTH = Dimensions.get('window').width;

export default function CustomFooter(props) {
  const _renderTallooUserEvent = () => {
    return (
      <View
        style={{
          alignSelf: 'flex-end',
          marginRight: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[
              style.buttonContainer,
              {
                backgroundColor: 'white',
                borderColor: 'black',
                marginRight: WIDTH * 0.02,
              },
            ]}
            onPress={props.deleteEvent}>
            <Image
              source={EVENT_IMAGE_CONSTANT.EVENT_DELETE}
              style={style.imageContainer}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              style.buttonContainer,
              {
                backgroundColor: 'white',
                borderColor: 'black',
                marginRight: WIDTH * 0.02,
              },
            ]}
            onPress={props.duplicateEvent}>
            <Image
              source={EVENT_IMAGE_CONSTANT.EVENT_DUPLICATE}
              style={style.imageContainer}
              resizeMode="contain"
            />
          </TouchableOpacity>

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
            onPress={props.updateEvent}>
            <Image
              source={EVENT_IMAGE_CONSTANT.EVENT_EDIT}
              style={style.imageContainer}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              style.buttonContainer,
              {
                backgroundColor: '#DD0000',
                marginRight: WIDTH * 0.02,
              },
            ]}
            onPress={props.shareEvent}>
            <Icon name="share" size={WIDTH * 0.06} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const _renderJoinOnlineEvent = () => {
    return (
      <View style={style.rightViewContainer}>
        <Text
          style={{
            fontSize: WIDTH * 0.04,
            fontWeight: '700',
            marginRight: WIDTH * 0.02,
          }}>
          {'Join Online Event'}
        </Text>
        <TouchableOpacity
          style={[
            style.buttonContainer,
            {
              backgroundColor: '#DD0000',
            },
          ]}
          onPress={props.joinOnlineEvent}>
          <Image
            source={EVENT_IMAGE_CONSTANT.EVENT_ANGEL_RIGHT}
            style={{width: WIDTH * 0.06, height: WIDTH * 0.06}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };

  const _renderAddEvent = () => {
    return (
      <View style={style.rightViewContainer}>
        <TouchableOpacity
          style={[
            style.buttonContainer,
            {
              backgroundColor: '#000',
            },
          ]}
          onPress={props.addEvent}>
          <Text
            style={{
              fontSize: WIDTH * 0.04,
              fontWeight: '700',
              marginRight: WIDTH * 0.02,
              color: '#fff',
            }}>
            {props.eventTitle}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const _renderProfileShare = () => {
    return (
      <View
        style={{
          alignSelf: 'flex-end',
          marginRight: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={[style.buttonContainer]}
            onPress={props.shareProfile}>
            <Image
              source={NEW_PROFILE_IMG.EXTERNAL}
              style={style.imageContainer}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              style.buttonContainer,
              {
                backgroundColor: props.isSaved ? '#DD0000' : 'white',
                borderColor: 'black',
                marginRight: WIDTH * 0.02,
              },
            ]}
            onPress={props.saveProfile}>
            <Image
              source={
                props.isSaved
                  ? PROFILE_IMAGE_CONSTANT.SAVE_PROFILE
                  : PROFILE_IMAGE_CONSTANT.UNSAVE_PROFILE
              }
              style={style.imageContainer}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={style.mainContainer}>
      <View style={style.subContainer}>
        <View style={style.container}>
          <TouchableOpacity
            style={style.touchableContainer}
            onPressIn={() =>
              props.isBack
                ? props.navigation.dispatch(
                    StackActions.reset({
                      index: 0,
                      actions: [NavigationActions.navigate({routeName: 'Tab'})],
                    }),
                  )
                : props.navigation.goBack()
            }>
            <Image
              source={TAB_FOOTER_IMAGE_CONSTANT.FOOTER_BACK}
              style={style.img}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {props.showEvent ? (
          <View style={style.rightViewContainer}>
            {props.url.length > 0 ? (
              <View style={style.rightViewContainer}>
                <Text
                  style={{
                    fontSize: WIDTH * 0.04,
                    fontWeight: '700',
                    marginRight: WIDTH * 0.02,
                    color: props.isEnableProfile ? 'black' : 'gray',
                  }}>
                  {props.isGoing ? "You're going." : 'RSVP'}
                </Text>
                <TouchableOpacity
                  style={[
                    style.buttonContainer,
                    {
                      backgroundColor: props.isEnableProfile
                        ? props.isGoing
                          ? '#DD0000'
                          : 'white'
                        : 'gray',
                      borderColor: props.isGoing ? 'transparent' : 'black',
                      borderWidth: props.isGoing ? 0 : 2,
                    },
                  ]}
                  onPress={props.handleClick}>
                  <Image
                    source={
                      props.isGoing
                        ? TAB_FOOTER_IMAGE_CONSTANT.FOOTER_EVENT
                        : TAB_FOOTER_IMAGE_CONSTANT.FOOTER_TICKET
                    }
                    style={style.image}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View></View>
            )}
          </View>
        ) : props.isChat ? (
          <View style={style.rightViewContainer}>
            <TouchableOpacity
              style={[
                style.buttonContainer,
                {
                  backgroundColor: '#DD0000',
                },
              ]}
              onPress={props.navigateTochat}>
              <Image
                source={TAB_FOOTER_IMAGE_CONSTANT.FOOTER_ADD}
                style={style.imageContainer}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        ) : props.isTalloo ? (
          _renderTallooUserEvent()
        ) : props.showOnlineEvent ? (
          _renderJoinOnlineEvent()
        ) : props.showSaveEvent ? (
          _renderAddEvent()
        ) : props.isProfile ? (
          _renderProfileShare()
        ) : null}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    marginBottom: 5,
    justifyContent: 'flex-end',
    bottom: 0,
    borderTopWidth: 1,
    borderColor: '#b4b4b4',
  },
  subContainer: {
    flexDirection: 'row',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  container: {
    alignSelf: 'flex-start',
    marginLeft: 15,
    zIndex: 1,
  },
  touchableContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH * 0.12,
    height: WIDTH * 0.12,
    borderRadius: parseInt((WIDTH * 0.12) / 2),
    // backgroundColor: '#E5E5E5',
    zIndex: 1,
  },
  img: {
    width: WIDTH * 0.06,
    height: WIDTH * 0.06,
    alignSelf: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH * 0.3,
    height: WIDTH * 0.1,
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
    flexDirection: 'row',
  },
  image: {
    width: WIDTH * 0.06,
    height: WIDTH * 0.06,
    alignSelf: 'center',
  },
});
