import {
  StyleSheet,
  Text,
  View,
  Platform,
  UIManager,
  Linking,
  Dimensions,
  StatusBar,
  Alert,
  LayoutAnimation,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  PRIVACY_CONSTANTS,
  MESSAGE,
  PROFILE_IMAGE_CONSTANT,
  NEW_PROFILE_IMG,
  TAB_FOOTER_IMAGE_CONSTANT,
  SUBSCRIPTION_URL,
  EVENT_CATEGORY_CONSTANT,
} from '../../utils/Constant';
import React, {useState} from 'react';
import {NavigationActions, StackActions} from 'react-navigation';
import {shouldUseActivityState} from 'react-native-screens';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Profile(props, {navigation}) {
  const [profileImg, setProfileImg] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [profile, setprofile] = useState([]);
  const [currentUserId, setCurrentUserId] = useState('');
  const [currentUser, setCurrentUser] = useState([]);
  const [openUrl, setOpenUrl] = useState('');
  const [isCall, setIsCall] = useState('');
  const [isMsg, setIsMsg] = useState('');
  const [isEmail, setIsEmail] = useState('');
  const [note, setNote] = useState('');
  const [isNoteAdded, setIsNoteAdded] = useState('');
  const [height, setHeight] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [userKeywordList, setUserKeywordList] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [savedUser, setSavedUser] = useState([]);
  const [userPlan, setUserPlan] = useState('');
  const [currentPlan, setCurrentPlan] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>Add Profile Photo</Text>
        <TouchableOpacity>
          <Image style={styles.addIcon} source={EVENT_CATEGORY_CONSTANT.ADD} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    // backgroundColor: 'red',
    flexDirection: 'column',
    width: wp('94%'),
    left: wp('3%'),
    height: hp('20%'),
    borderWidth: wp('0.2%'),
    borderColor: 'gray',
    justifyContent: 'center',
    borderRadius: wp('3%'),
  },
  profileText: {
    textAlign: 'center',
    color: 'gray',
    fontWeight: '800',
    fontSize: wp('4%'),
  },
  addIcon: {
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: wp('5%'),
    height: hp('2%'),
    // borderRadius: (wp('5%') * hp('2%')) / 2,
    borderRadius: wp('5%'),
  },
});
