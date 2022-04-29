import React, {useRef, useState} from 'react';
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
  UIManager,
} from 'react-native';
import {PROFILE_IMAGE_CONSTANT} from '../../utils/Constant';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ParallaxScrollView from 'react-native-parallax-scrollview';
import ViewMoreText from 'react-native-view-more-text';
import SectionView from '../../components/SectionView';
import TagView from '../../components/TagView';
import LinkView from '../../components/LinkView';
import CustomFooter from '../../components/CustomFooter';
import Accordion from '@gapur/react-native-accordion';
import {useNavigation} from '@react-navigation/native';
import email from 'react-native-email';
import AppLink from 'react-native-app-link';
import OfflineNotice from '../../helper/OfflineNotice';
import BrowserModal from '../../components/BrowserModal';

const storeConfig = {
  facebook: {
    appName: 'facebook',
    appStoreId: 284882215,
    playStoreId: 'com.facebook.katana',
  },
  linkedin: {
    appName: 'linkedin-job-search-news',
    appStoreId: 288429040,
    playStoreId: 'com.linkedin.android',
  },
  twitter: {
    appName: 'twitter',
    appStoreId: 333903271,
    playStoreId: 'com.twitter.android',
  },
};

export default function TeamProfile(props) {
  const [profile, setProfile] = useState([]);
  const [openUrl, setopenUrl] = useState('');
  const [savedUser, setSavedUser] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [currentUserId, setCurrentUserId] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [userKeywordList, setUserKeywordList] = useState([]);
  const [hgt, setHeight] = useState(0);
  const [note, setNote] = useState('');
  const browseModelRef = useRef < BrowserModal > null;
  //   let isBlockUser = false;
  let isEnableProfile = true;
  let SCREEN_HEIGHT = Dimensions.get('window').height;

  const navigation = useNavigation();
  // const user = props.route.params.itemData
  // console.log("user",user)

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

  const onClickGetAddressDirection = () => {
    console.log(':::::: profile', profile);
    if (Object.keys(profile).length > 0) {
      if (profile.address != undefined) {
        let addone =
          profile.address.address_one != '' ? profile.address.address_one : '';
        let addtwo =
          profile.address.address_two != '' ? profile.address.address_two : '';
        let cityname = profile.address.city != '' ? profile.address.city : '';
        let state = profile.address.state != '' ? profile.address.state : '';
        let zip = profile.address.zip != '' ? profile.address.zip : '';

        let addressText = `${addone}${
          addtwo != '' && addone != '' ? `\n` : ''
        }${addtwo}${
          addtwo != '' || addone != '' ? `\n` : ''
        }${cityname} ${state} ${zip}`;

        let lat = profile.coordinates ? profile.coordinates.latitude : '';
        let lng = profile.coordinates ? profile.coordinates.longitude : '';

        const latLng = `${lat},${lng}`;

        const scheme = Platform.select({
          ios: 'maps:0,0?q=',
          android: 'geo:0,0?q=',
        });

        const url = Platform.select({
          ios: `${scheme}${addressText}@${latLng}`, //`http://maps.apple.com/?daddr=${label}`,//
          android: `${scheme}${latLng}(${addressText})`, //`http://maps.google.com/?daddr=${label}`//
        });

        Linking.openURL(url);
      }
    }
  };

  const onClickWebLinks = (url, type) => {
    let appName =
      type === 'facebook'
        ? storeConfig.facebook.appName
        : type === 'twitter'
        ? storeConfig.twitter.appName
        : type === 'linkedin'
        ? storeConfig.linkedin.appName
        : '';

    let appStoreId =
      type === 'facebook'
        ? storeConfig.facebook.appStoreId
        : type === 'twitter'
        ? storeConfig.twitter.appStoreId
        : type === 'linkedin'
        ? storeConfig.linkedin.appStoreId
        : '';

    let playStoreId =
      type === 'facebook'
        ? storeConfig.facebook.playStoreId
        : type === 'twitter'
        ? storeConfig.twitter.playStoreId
        : type === 'linkedin'
        ? storeConfig.linkedin.playStoreId
        : '';
    let appStoreLocale = 'us';

    var parts = url.split('.com/');

    if (parts.length == null || type !== 'web') {
      let urlType =
        type === 'facebook'
          ? `fb://profile?id=${parts[1]}`
          : type === 'twitter'
          ? `twitter://user?screen_name=${parts[1]}`
          : type === 'linkedin'
          ? `linkedin://${parts[1]}`
          : '';
      Linking.canOpenURL(url)
        .then(supported => {
          if (!supported) {
            AppLink.openInStore(url, {
              appName,
              appStoreId,
              appStoreLocale,
              playStoreId,
            })
              .then(() => {})
              .catch(err => {});
          } else {
            let wurl = `zoomus://zoom.us/join?confno=159147452&pwd=N0k0MGILzVIQnMxV1k5aEJZa0tlQT09`;
            return Linking.openURL(urlType);
          }
        })
        .catch(err => console.error('An error occurred', err));
    } else {
      setopenUrl({openUrl: url}, () => {
        props.browserForm.show();
      });
    }
  };

  const onTagSelect = tag => {
    props.getSelectedKeyword(tag);
    props.navigation.navigate('Contact');
  };

  const onClickWebLinks1 = (url, type) => {
    let appName =
      type == 'facebook'
        ? storeConfig.facebook.appName
        : type == 'twitter'
        ? storeConfig.twitter.appName
        : type == 'linkedin'
        ? storeConfig.linkedin.appName
        : '';
    let appStoreId =
      type == 'facebook'
        ? storeConfig.facebook.appStoreId
        : type == 'twitter'
        ? storeConfig.twitter.appStoreId
        : type == 'linkedin'
        ? storeConfig.linkedin.appStoreId
        : '';
    let playStoreId =
      type == 'facebook'
        ? storeConfig.facebook.playStoreId
        : type == 'twitter'
        ? storeConfig.twitter.playStoreId
        : type == 'linkedin'
        ? storeConfig.linkedin.playStoreId
        : '';
    let appStoreLocale = 'us';

    var parts = url.split('.com/');

    if (parts.length == null || type != 'links') {
      let urlType =
        type == 'facebook'
          ? `fb://profile?id=${parts[1]}`
          : type == 'twitter'
          ? `twitter://user?screen_name=${parts[1]}`
          : type == 'linkedin'
          ? `linkedin://${parts[1]}`
          : '';
      Linking.canOpenURL(url)
        .then(supported => {
          if (!supported) {
            AppLink.openInStore(url, {
              appName,
              appStoreId,
              appStoreLocale,
              playStoreId,
            })
              .then(() => {
                // do stuff
              })
              .catch(err => {
                // handle error
              });
          } else {
            let wurl = `zoomus://zoom.us/join?confno=159147452&pwd=N0k0MGILzVIQnMxV1k5aEJZa0tlQT09`;
            return Linking.openURL(urlType);
            //fb://faceweb/f?href={{urlencoded sharer.php url}}
          }
        })
        .catch(err => console.error('An error occurred', err));
    } else {
      setopenUrl({openUrl: url}, () => {
        props.browserForm.show();
      });
    }
  };

  const onSelectProfileData = (profileType, tag = '', index) => {
    // alert('onSelectedProfile called...');
    switch (profileType) {
      case 'message':
        props.getSenderChatuser(profile.user_id);
        props.navigation.navigate('Message');
        break;

      case 'call':
        Linking.openURL(`tel:${profile.phone_number}`);
        break;
      case 'email':
        Linking.openURL(`mailto:${profile.email}?`);
        break;

      case 'address':
        onClickGetAddressDirection();
        break;
      case 'web':
        onClickWebLinks(profile.online.web_address, 'web');
        break;
      case 'links':
        onClickWebLinks1(profile.links[index].urlLink, 'links');
        console.log(
          'checking... onClickWebLinks1====>>>pro',
          profile.links[index].urlLink,
        );
        break;

      case 'linkedin':
        onClickWebLinks(profile.online.linkedin_url, 'linkedin');
        break;
      case 'facebook':
        onClickWebLinks(profile.online.facebook_url, 'facebook');
        break;
      case 'twitter':
        onClickWebLinks(profile.online.twitter_url, 'twitter');
        break;
      case 'tag':
        onTagSelect(tag);

        break;
      default:
        break;
    }
  };

  const handleEmail = (item1, item2) => {
    console.log('checking item1::-->', item1);
    const to = ['support@talloo.com']; // string or array of email addresses
    email(to, {
      // Optional additional arguments
      // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
      // bcc: 'mee@mee.com', // string or array of email addresses
      subject: 'Talloo Profile Reported',
      body:
        item1 + ' ' + 'https://app.talloo.com/viewProfile/' + profile.user_id,
    }).catch(console.error);
  };

  const onClickMyNote = () => {
    // alert('on click my notes');
    setExpanded({expanded: !expanded});
  };

  const renderNoteView = () => {
    return (
      <View
        style={[
          styles.textInputParentView,
          {hight: expanded ? null : 0, margin: 20},
        ]}>
        <TextInput
          placeholder={''}
          autoCapitalize="sentences"
          multiline={true}
          //style={[styles.input, { height: 150, textAlign: 'left', textAlignVertical: 'top', marginTop: 10 }]}
          onChangeText={val => setNote({note: val})}
          value={note}
          onContentSizeChange={
            event => setHeight({hgt: event.nativeEvent.contentSize.hgt})
            // storing the content text height to height state
          }
          style={[
            styles.input,
            {
              hgt: Math.min(250, Math.max(150, hgt)),
              textAlign: 'left',
              textAlignVertical: 'top',
              // margin: 20,
              // marginTop: 20,
              // marginRight: 5,
              // width: this.state.note.trim().length == 0 ? '100%' : '90%'
              //passing content text height to textinput height by setting height limintation between 35 to 120px
            },
          ]}
        />

        <TouchableHighlight
          style={[styles.angelButton, {backgroundColor: '#DD0000'}]}
          onPress={addNote}
          underlayColor="#f1f1f1">
          <Image
            style={styles.angelImage}
            source={PROFILE_IMAGE_CONSTANT.ANGEL_UP_WHITE}></Image>
        </TouchableHighlight>
      </View>
    );
  };

  const profileShare = () => {
    alert('profileShare called...');
  };

  const navigateToEditProfile = ({
    profile,
    currentUserId,
    currentUser,
    props,
  }) => {
    const userId = profile.user_id === currentUserId;
    props.navigation.navigate('CreateProfile', {
      profile: userId ? [profile] : currentUser,
      createProfile: 2,
    });
  };

  const logoutUser = async => {
    Alert.alert('Sign out', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const addNote = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded({expanded: !expanded}, () => {
      let profileUserId = profile.user_id;
      const updateNote = {
        note: {
          ...profile.note,
          [`${props.userId}`]: note,
        },
      };
      if (note.trim().length > 0) {
        props.updateUser(profileUserId, updateNote);
      }
    });
    // alert('addNotes called...');
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <OfflineNotice />

      <BrowserModal ref={props.browserForm} url={openUrl} />

      <ParallaxScrollView
        windowHeight={SCREEN_HEIGHT * 0.4}
        backgroundSource={
          {
            //  uri: user.Image
          }
        }
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
          style={[styles.scrollViewStyle, {marginTop: -20}]}
          keyboardDismissMode="interactive">
          <View style={styles.signInContainer}>
            <View style={styles.subViewContainer}>
              <View style={[styles.sectionView, styles.subViewContainer]}>
                <Text style={styles.profileTitle}>
                  {/* {user.firstname} {user.lastname} */}
                  hii hhh
                </Text>
                <Text style={styles.titleText}>
                  {/* {user.position} */}
                  jkj
                </Text>
                <Text style={styles.titleText}>
                  {/* {user.profile} */}
                  jhj
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.signInContainer, {marginTop: 0}]}>
            <View style={[styles.sectionView, {marginTop: 0}]}>
              <View
                style={[
                  styles.subViewContainer,
                  {marginTop: 15, marginLeft: '2%'},
                ]}>
                <View style={[styles.subViewContainer]}>
                  <ViewMoreText
                    numberOfLines={4}
                    renderViewMore={renderViewMoreDescription}
                    renderViewLess={renderViewLessDescription}>
                    <Text style={[styles.subTitleText]}>
                      macOS Catalina, aka macOS 10.15, is an older version of
                      the operating system that runs on the Mac. macOS
                      Catalina's name was inspired by Santa Catalina Island,
                      popularly known as Catalina and one of the Channel Islands
                      off the coast of Southern California. macOS Catalina
                      preceded macOS Big Sur. In macOS Catalina, Apple has
                      eliminated the iTunes app that's been a staple of the Mac
                      operating system since 2001. iTunes was split into three
                      apps: Music, Podcasts, and TV. The new apps are similar in
                      function to iTunes now, but are split up by feature. You
                      can still manage your devices in Catalina, but it's now
                      done through the Finder rather than through an app.
                      Syncing media can be done using the Apple TV, Podcasts, or
                      Music apps.
                    </Text>
                  </ViewMoreText>
                </View>
              </View>
            </View>
          </View>
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
              containerStyle={[styles.linkViewContainer, {marginTop: 20}]}
            />
          </TouchableOpacity>
          {expanded ? renderNoteView() : null}
          <SectionView
            text={'CONTACT INFORMATION'}
            viewStyle={{marginTop: 20, backgroundColor: '#EFEFF5'}}
            textStyle={{marginLeft: 25}}
          />
          {currentUserId != profile.user_id ? (
            <TouchableOpacity onPress={() => onSelectProfileData()}>
              <LinkView
                img={PROFILE_IMAGE_CONSTANT.MESSAGE}
                text={'Message'}
                textStyle={{color: 'black'}}
                containerStyle={[styles.linkViewContainer, {marginTop: 20}]}
                isShowLine={false}
              />
              {/* <ProfileView text={'Message'} /> */}
            </TouchableOpacity>
          ) : null}
          {/* {profile.phone_number != undefined ? (*/}
          <View>
            {/*  {profile.phone_number != '' ? (*/}
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
            {/* ) : null}*/}
          </View>
          {/*  ) : null}*/}
          {/*  {profile.email != undefined ? (*/}
          <View>
            {/*   {profile.email != '' ? (*/}
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
            {/* ) : null}*/}
          </View>
          {/*   ) : null}*/}
          {/*  {profile.address != undefined ? (*/}
          <TouchableOpacity onPress={() => onSelectProfileData()}>
            <LinkView
              img={PROFILE_IMAGE_CONSTANT.MAP_MARKER}
              text={'Address'}
              textStyle={{color: 'black'}}
              containerStyle={[styles.linkViewContainer, {marginBottom: 10}]}
            />
            {/* <ProfileView text={addressText} /> */}
          </TouchableOpacity>
          {/*  ) : null}*/}
          {/* {profile.user_id != undefined ? (*/}
          <TouchableOpacity
            onPress={() => profileShare()}
            style={{borderBottomWidth: 1, borderColor: '#b4b4b4'}}>
            <LinkView
              img={PROFILE_IMAGE_CONSTANT.SHAREPROFILE}
              text={'Share Profile'}
              textStyle={{color: 'black'}}
              containerStyle={[styles.linkViewContainer, {marginBottom: 10}]}
            />
          </TouchableOpacity>
          {/*   ) : null}*/}
          {/*  {profile.online != undefined ? (
            profile.online.web_address != '' ||
            profile.online.linkedin_url != '' ||
            profile.online.facebook_url != '' ||
            profile.online.twitter_url != '' ||
            profile.links != undefined ? (*/}
          <SectionView text={'LINKS'} textStyle={{marginLeft: 25}} />
          {/*) : null*/}
          {/*) : null}*/}
          {/*  {profile.online != undefined ? (*/}
          <View>
            {/*{profile.online.web_address != '' ? (*/}
            <TouchableOpacity onPress={() => onSelectProfileData()}>
              <LinkView
                img={PROFILE_IMAGE_CONSTANT.WEB}
                text="Website"
                textStyle={{color: 'black'}}
                isShowLine={false}
                containerStyle={[styles.linkViewContainer, {marginTop: 20}]}
              />
            </TouchableOpacity>
            {/* ) : null}{/*

             {/*  {profile.online.linkedin_url != '' ? (*/}
            <TouchableOpacity onPress={() => onSelectProfileData()}>
              <LinkView
                img={PROFILE_IMAGE_CONSTANT.LINKEDIN_OFFICIAL}
                text="LinkedIn"
                textStyle={{color: 'black'}}
                containerStyle={styles.linkViewContainer}
              />
            </TouchableOpacity>
            {/*   ) : null}*/}
            {/*   {profile.online.facebook_url != '' ? (*/}
            <TouchableOpacity onPress={() => onSelectProfileData()}>
              <LinkView
                img={PROFILE_IMAGE_CONSTANT.FACEBOOK_OFFICIAL}
                text="Facebook"
                textStyle={{color: 'black'}}
                containerStyle={styles.linkViewContainer}
              />
            </TouchableOpacity>
            {/*) : null}
            {profile.online.twitter_url != '' ? (*/}
            <TouchableOpacity
              style={{
                borderBottomWidth: 1,
                borderColor: '#b1b1b1',
                paddingBottom: 20,
              }}
              onPress={() => onSelectProfileData('twitter', isEnableProfile)}>
              <LinkView
                img={PROFILE_IMAGE_CONSTANT.TWITTER_OFFICIAL}
                text="Twitter"
                textStyle={{color: 'black'}}
                containerStyle={styles.linkViewContainer}
              />
            </TouchableOpacity>
            {/* ) : null}*/}
          </View>
          {/* ) : null}*/}
          {/*  {profile.links != undefined ? (*/}
          <View>
            {/*{profile.links.map((val, ind) => (*/}
            <TouchableOpacity
              style={{
                borderBottomWidth: 1,
                borderColor: '#b1b1b1',
                paddingBottom: 20,
              }}
              onPress={() => onSelectProfileData()}>
              <LinkView
                img={PROFILE_IMAGE_CONSTANT.WEB}
                // text={val.linkname}
                desc={true}
                // descdata={val.linkDescri}
                textStyle={{color: 'black'}}
                isShowLine={false}
                containerStyle={[styles.linkViewContainer, {marginTop: 20}]}
              />
            </TouchableOpacity>
            {/* ))}*/}
          </View>
          {/* ) : null}*/}
          {/* {userKeywordList.length > 0 ? (*/}
          <SectionView
            // text={`MEET OTHER PEOPLE LIKE ${profile.first_name.toUpperCase()}`}
            text={`MEET OTHER PEOPLE LIKE $ Demo`}
            viewStyle={{marginTop: 20}}
            textStyle={{marginLeft: 25}}
          />
          {/* ) : null}    */}
          <TagView
            keywords={userKeywordList}
            onPress={tag => onSelectProfileData()}
            textStyle={{color: 'black'}}
          />

          <View style={{marginTop: 20}}>
            <Accordion
              style={{elevation: 0}}
              headerStyle={{}}
              headerTitle="Report Profile"
              headerTitleStyle={{fontSize: 18, fontWeight: 'bold'}}>
              <View style={{marginTop: 10, flexDirection: 'row'}}>
                <View style={{width: '50%'}}>
                  <TouchableOpacity
                    onPress={() => handleEmail('Abandoned Profile')}
                    style={{
                      borderRadius: 10,
                      width: '80%',
                      height: 30,
                      marginLeft: 10,
                      justifyContent: 'center',
                      backgroundColor: '#000',
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 12,
                      }}>
                      Abandoned Profile
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{width: '50%'}}>
                  <TouchableOpacity
                    onPress={() => handleEmail('Review the Profile')}
                    style={{
                      borderRadius: 10,
                      width: '80%',
                      height: 30,
                      marginLeft: 20,
                      justifyContent: 'center',
                      backgroundColor: '#000',
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 12,
                      }}>
                      Review the Profile
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Accordion>
          </View>
          <View style={{marginTop: 10}}></View>
        </ScrollView>
      </ParallaxScrollView>
      <CustomFooter isBack={false} navigation={props.navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp('3%'),
  },
  scrollViewStyle: {
    flex: 1,
    // marginBottom: 10,
    // marginBottom: height * 0.2,
    // borderTopLeftRadius: 15,
    borderTopLeftRadius: wp('4%'),
    // borderTopRightRadius: 15,
    borderTopRightRadius: wp('4%'),
    zIndex: 0,
    // marginTop: hp('1%'),
    backgroundColor: '#ffffff',
  },
  angelButton: {
    marginTop: 15,
    width: 30,
    height: 30,
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
    height: 150,
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
});
