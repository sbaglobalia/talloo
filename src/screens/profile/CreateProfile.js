import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
  Linking,
  Dimensions,
  StatusBar,
  TouchableHighlight,
  Alert,
  LayoutAnimation,
} from 'react-native';
import {PROFILE_IMAGE_CONSTANT, NEW_PROFILE_IMG} from '../../utils/Constant';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ParallaxScrollView from 'react-native-parallax-scrollview';
import ViewMoreText from 'react-native-view-more-text';
import SectionView from './../../components/SectionView';
import TagView from '../../components/TagView';
import SignIn from '../signIn/SignIn';

import {NavigationActions, StackActions} from 'react-navigation';

import LinkView from './../../components/LinkView';

export default function CreateProfile({navigation}) {
  const [profile, setProfile] = useState([]);
  const [savedUser, setSavedUser] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [currentUserId, setCurrentUserId] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [userKeywordList, setUserKeywordList] = useState([]);
  const [note, setNote] = useState('');
  const [isCreateProfile, setIsCreateProfile] = useState('');
  const [signInBy, setSignInBy] = useState('');
  let isBlockUser = false;
  let isEnableProfile = true;
  let SCREEN_HEIGHT = Dimensions.get('window').height;

  const renderViewMoreDescription = onPress => {
    return (
      <TouchableHighlight
        style={styles.angelButton}
        onPress={onPress}
        underlayColor="#f1f1f1">
        <Image
          style={styles.angelImage}
          source={PROFILE_IMAGE_CONSTANT.ANGEL_DOWN}
        />
      </TouchableHighlight>
    );
  };

  const renderViewLessDescription = onPress => {
    return (
      <TouchableHighlight
        style={[styles.angelButton, {backgroundColor: '#DD0000'}]}
        onPress={onPress}
        underlayColor="#f1f1f1">
        <Image
          style={styles.angelImage}
          source={PROFILE_IMAGE_CONSTANT.ANGEL_UP_WHITE}
        />
      </TouchableHighlight>
    );
  };

  const onSelectProfileData = isEnableProfile => {
    alert('onSelectedProfile called...');
  };

  const onClickMyNote = () => {
    alert('on click my notes');
  };

  const renderNoteView = ({expanded}) => {
    return (
      <View
        style={[
          styles.textInputParentView,
          {height: expanded ? null : 0, margin: 20},
        ]}>
        <TextInput
          placeholder={''}
          autoCapitalize="sentences"
          multiline={true}
          onChangeText={val => ({note: val})}
          // value={note}
          onContentSizeChange={event => ({
            height: event.nativeEvent.contentSize.height,
          })}
          style={[
            styles.input,
            ,
            {
              height: Math.min(250, Math.max(150, this.state.height)),
              textAlign: 'left',
              textAlignVertical: 'top',
            },
          ]}
        />

        <TouchableHighlight
          style={[styles.angelButton, {backgroundColor: '#DD0000'}]}
          onPress={addNote()}
          underlayColor="#f1f1f1">
          <Image
            style={styles.angelImage}
            source={PROFILE_IMAGE_CONSTANT.ANGEL_UP_WHITE}></Image>
        </TouchableHighlight>
      </View>
    );
  };

  const navigateToEditProfile = () => {
    navigation.navigate('Profile');
  };

  const logoutUser = async => {
    Alert.alert('Sign out', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },

      {text: 'OK', onPress: () => navigation.navigate('SignIn')},
    ]);
  };

  const addNote = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    // setExpanded({expanded: !expanded}, () => {
    //   let profileUserId = profile.user_id;
    //   const updateNote = {
    //     note: {
    //       ...this.state.profile.note,
    //       [`${this.props.userId}`]: this.state.note,
    //     },
    //   };
    //   if (this.state.note.trim().length > 0) {
    //     this.props.updateUser(profileUserId, updateNote);
    //   }
    // });
    alert('addNotes called...');
  };
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ParallaxScrollView
        windowHeight={SCREEN_HEIGHT * 0.4}
        backgroundSource={{
          uri: 'https://images.unsplash.com/photo-1522196772883-393d879eb14d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80',
        }}
        navBarTitle={'first name and last name'}
        userName=" "
        userTitle=" "
        userImage=" "
        headerView={
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{width: '100%', height: '100%'}}>
            <Text style={styles.headerTextViewSubtitle}> </Text>
          </TouchableOpacity>
        }>
        <ScrollView
          style={[
            styles.scrollViewStyle,
            // {marginTop: -20}
          ]}
          keyboardDismissMode="interactive">
          <View style={[styles.signInContainer]}>
            <View style={styles.subViewContainer}>
              <View style={[styles.sectionView, styles.subViewContainer]}>
                <Text style={styles.profileTitle}>
                  {/*  {`${profile.first_name} ${profile.last_name}`}*/}
                  First Last
                </Text>
                <Text style={styles.titleText}>
                  {/* {profile.occupation}*/}
                  occupation
                </Text>
                <Text style={styles.titleText}>
                  {/* {profile.company}*/}
                  company
                </Text>

                <ViewMoreText
                  numberOfLines={4}
                  renderViewMore={renderViewMoreDescription()}
                  renderViewLess={renderViewLessDescription()}>
                  <Text style={[styles.subTitleText]}>
                    {/* {profile.about}*/}
                    About
                  </Text>
                </ViewMoreText>
              </View>
            </View>

            <View style={[styles.signInContainer, {marginTop: 0}]}>
              <View style={[styles.sectionView, {marginTop: 0}]}>
                {/*  <View
                  style={[
                    styles.sectionView,
                    styles.subViewContainer,
                    {marginTop: 0},
                  ]}></View>*/}

                {/* <View style={[styles.subViewContainer]}>
                  <View style={[styles.subViewContainer, {marginTop: 15}]}>*/}

                <SectionView
                  text={'Contact Info'}
                  viewStyle={{
                    marginTop: wp('5%'),
                    backgroundColor: '#EFEFF5',
                  }}
                  textStyle={{marginLeft: wp('8%')}}
                />
                <TouchableOpacity onPress={() => onSelectProfileData()}>
                  <LinkView
                    img={PROFILE_IMAGE_CONSTANT.MESSAGE}
                    text={'Message'}
                    textStyle={{color: 'black'}}
                    containerStyle={[
                      styles.linkViewContainer,
                      {marginTop: hp('2%')},
                    ]}
                    isShowLine={false}
                  />
                </TouchableOpacity>
                <View>
                  <View>
                    <TouchableOpacity onPress={() => onSelectProfileData()}>
                      <View>
                        <LinkView
                          img={PROFILE_IMAGE_CONSTANT.PHONE_DIALLER}
                          text={'Call'}
                          textStyle={{color: 'black'}}
                          containerStyle={styles.linkViewContainer}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View>
                  <TouchableOpacity onPress={() => onSelectProfileData()}>
                    <View>
                      <LinkView
                        img={PROFILE_IMAGE_CONSTANT.MAIL}
                        text={'Email'}
                        textStyle={{
                          color: !isEnableProfile ? '#A6A6A6' : 'black',
                        }}
                        containerStyle={styles.linkViewContainer}
                        isemail={true}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={{
                    marginBottom: 0,
                    borderBottomWidth: 1,
                    borderColor: '#b4b4b4',
                  }}
                  onPress={() => onSelectProfileData()}>
                  <LinkView
                    img={PROFILE_IMAGE_CONSTANT.MAP_MARKER}
                    text={'Address'}
                    textStyle={{color: 'black'}}
                    containerStyle={[
                      styles.linkViewContainer,
                      // {marginBottom: 10},
                    ]}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onClickMyNote}
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: '#b4b4b4',
                  }}>
                  <LinkView
                    img={PROFILE_IMAGE_CONSTANT.STICKY_NOTE}
                    text={'My Note'}
                    isShowLine={false}
                    textStyle={{color: 'black'}}
                    containerStyle={[
                      styles.linkViewContainer,
                      {marginTop: hp('2%')},
                    ]}
                  />
                </TouchableOpacity>
                <SectionView
                  text={'Resources'}
                  textStyle={{marginLeft: wp('8%')}}
                />
              </View>
              <View>
                <TouchableOpacity onPress={() => onSelectProfileData()}>
                  <LinkView
                    img={PROFILE_IMAGE_CONSTANT.WEB}
                    text="Website"
                    textStyle={{color: 'black'}}
                    isShowLine={false}
                    containerStyle={[
                      styles.linkViewContainer,
                      {marginTop: hp('3%')},
                    ]}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => onSelectProfileData()}>
                  <LinkView
                    img={PROFILE_IMAGE_CONSTANT.LINKEDIN_OFFICIAL}
                    text="LinkedIn"
                    textStyle={{color: 'black'}}
                    containerStyle={styles.linkViewContainer}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onSelectProfileData()}>
                  <LinkView
                    img={PROFILE_IMAGE_CONSTANT.FACEBOOK_OFFICIAL}
                    text="Facebook"
                    textStyle={{color: 'black'}}
                    containerStyle={styles.linkViewContainer}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderBottomWidth: 1,
                    borderColor: '#b1b1b1',
                    // paddingBottom: 20,
                    paddingBottom: hp('1%'),
                  }}
                  onPress={() => onSelectProfileData()}>
                  <LinkView
                    img={PROFILE_IMAGE_CONSTANT.TWITTER_OFFICIAL}
                    text="Twitter"
                    textStyle={{color: 'black'}}
                    containerStyle={styles.linkViewContainer}
                  />
                </TouchableOpacity>

                <SectionView
                  // text={`MEET OTHER PEOPLE LIKE ${profile.first_name.toUpperCase()}`}
                  text={'MEET OTHER PEOPLE LIKE RAHUL BODARA'}
                  viewStyle={{marginTop: hp('0%')}}
                  textStyle={{marginLeft: wp('8%')}}
                />
                <TagView
                  keywords={userKeywordList}
                  // onPress={tag =>
                  //   onSelectProfileData('tag', isEnableProfile, tag)
                  // }
                  onPress={() => onSelectProfileData()}
                  textStyle={{color: 'black'}}
                />
                <SectionView
                  text={'Settings'}
                  viewStyle={{marginTop: 0, backgroundColor: '#EFEFF5'}}
                  textStyle={{marginLeft: wp('8%')}}
                />
                <View style={{marginTop: 0}}>
                  <TouchableOpacity onPress={() => navigateToEditProfile()}>
                    <LinkView
                      img={NEW_PROFILE_IMG.PENCIL}
                      text={'Edit Profile'}
                      textStyle={{color: 'black'}}
                      containerStyle={[
                        styles.linkViewContainer,
                        {marginBottom: hp('1%')},
                      ]}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 0}}>
                  <TouchableOpacity
                    onPress={() => Linking.openURL('app-settings:')}>
                    <LinkView
                      img={NEW_PROFILE_IMG.BELL}
                      text={'Notification Settings'}
                      textStyle={{color: 'black'}}
                      containerStyle={[
                        styles.linkViewContainer,
                        {marginBottom: hp('1%')},
                      ]}
                    />
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: 0}}>
                  <TouchableOpacity onPress={() => logoutUser()}>
                    <LinkView
                      img={NEW_PROFILE_IMG.DOOR_OPEN}
                      text={'Sign Out'}
                      textStyle={{color: 'black'}}
                      containerStyle={[
                        styles.linkViewContainer,
                        {marginBottom: hp('1%')},
                      ]}
                    />
                  </TouchableOpacity>
                </View>
                {/*</View>
                </View> */}
              </View>
            </View>
          </View>
        </ScrollView>
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: hp('3%'),
  },
  scrollViewStyle: {
    flex: 1,
    marginBottom: -10,
    // marginBottom: height * 0.2,
    // borderTopLeftRadius: 15,
    borderTopLeftRadius: wp('4%'),
    // borderTopRightRadius: 15,
    borderTopRightRadius: wp('4%'),
    zIndex: 0,
    // marginTop: hp('1%'),
  },
  angelButton: {
    marginTop: 15,
    // width: 30,
    // height: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowOffset: {height: 0, width: 0},
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  angelImage: {
    width: 15,
    height: 20,
    alignSelf: 'center',
  },

  subViewContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  linkViewContainer: {
    marginLeft: wp('4%'),
    marginRight: wp('4%'),
  },

  textInputParentView: {
    overflow: 'hidden',
    flexDirection: 'column',
  },

  sectionTextContainer: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 10,
    marginBottom: 10,
  },

  signInContainer: {
    marginTop: hp('0.5%'),
  },

  titleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },

  sectionView: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    // marginTop: 10,
    marginTop: hp('1%'),
  },
  inputTitleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitleText: {
    fontSize: 18,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    // marginLeft: 10,
    // marginRight: 10,
    padding: 8,
    //color: 'black',
    borderRadius: 10,
    borderColor: 'lightgray',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },

  Alert_Title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    //padding: 10,
    height: '28%',
  },

  Alert_Message: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 5,
    //height: '42%'
  },
  Alert_SubMessage: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    //padding: 5,
    //height: '42%'
  },
  buttonStyle: {
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileTitle: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
    // marginTop: 10,
  },
  headerTextView: {
    backgroundColor: 'transparent',
  },
  headerTextViewTitle: {
    fontSize: 35,
    color: 'white',
    fontWeight: '300',
    paddingBottom: 10,
    textAlign: 'center',
  },
  headerTextViewSubtitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '300',
  },

  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    //   fontSize: 16,
    //   paddingVertical: 12,
    //   paddingHorizontal: 10,
    //   borderWidth: 1,
    //   borderColor: 'white',
    //   borderRadius: 4,
    //   color: 'white',
    //   paddingRight: 30, // to ensure the text is never behind the icon

    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    // marginLeft: 10,
    // marginRight: 10,
    padding: 8,
    color: 'black',
    borderRadius: 10,
    borderColor: 'lightgray',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
  inputAndroid: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    // marginLeft: 10,
    // marginRight: 10,
    padding: 8,
    color: 'black',
    borderRadius: 10,
    borderColor: 'lightgray',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    // fontSize: 16,
    // paddingHorizontal: 10,
    // paddingVertical: 8,
    // borderWidth: 0.5,
    // borderColor: 'white',
    // borderRadius: 8,
    // color: 'white',
    // paddingRight: 30, // to ensure the text is never behind the icon
  },

  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /// Moda style //////
  centeredViewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#fff',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
