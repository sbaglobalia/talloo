import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {CustomTextfield} from '../../components/CustomTextfield';
import {IMAGE_CONSTANT} from '../../utils/Constant';

const window = Dimensions.get('window');

export default function CreateProfile() {
  const image = {uri: 'https://reactjs.org/logo-og.png'};
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [jobtitle, setjobtitle] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [profileDate, setProfileData] = useState([]);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [profileUri, setProfileUri] = useState('');
  const [SocialLinkName, setSocialLinkName] = useState('');
  const [SocialLinkDescrip, setSocialLinkDescrip] = useState('');
  const [socialLink, setSocialLink] = useState('');

  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address_one, setAddress_one] = useState('');
  const [address_two, setAddress_two] = useState('');
  const [city, setCity] = useState('');
  const [statename, setStatename] = useState('');
  const [zipcode, SetZipcode] = useState('');
  const [description, setDescription] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentUserId, setCurrentUserId] = useState('');
  const [isCreateProfile, setIsCreateProfile] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const [currentUserProfile, setCurrentUserProfile] = useState([]);
  const [profileUserId, setProfileUserId] = useState('');
  const [profileUserToken, setprofileUserToken] = useState('');
  const [keywords, setKeywords] = useState([]);
  const [keywordText, setKeywordText] = useState([
    {
      id: 0,
      tag: '',
    },
  ]);
  const [allKeywordsList, setAllKeywordsList] = useState([]);
  const [isOpenKeyboard, setIsOpenKeyboard] = useState(false);
  const [activeInputIndex, setActiveInputIndex] = useState(0);
  const [nextFocusDisabled, setNextFocusDisabled] = useState(false);
  const [previousFocusDisabled, setpreviousFocusDisabled] = useState(false);
  const [buttonsDisabled, setbuttonsDisabled] = useState(false);
  const [buttonsHidden, setbuttonsHidden] = useState(false);
  const [signInBy, setSignInBy] = useState('');
  const [icon1, setIcon1] = useState('eye-off');
  const [valueIconEmail, setValueIconEmail] = useState('');
  const [icon, setIcon] = useState('eye-off');
  const [valueIconNumber, setValueIconNumber] = useState('');
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState([]);
  const [inputData, setInputData] = useState([]);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  console.log('firstname+++', firstname);
  console.log('lastname+++', lastname);
  console.log('jobtitle+++', jobtitle);
  console.log('companyname+++', companyname);
  console.log('email+++', email);
  console.log('phoneNumber+++', phoneNumber);
  console.log('location+++', location);
  console.log('SocialLinkName+++', SocialLinkName);
  console.log('SocialLinkDescrip+++', SocialLinkDescrip);
  console.log('socialLink+++', socialLink);



  const secondTextInput = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" scrollEnabled={true}>
        <View style={[styles.profilePicContainer]}>
          <View style={[styles.input, styles.input1]}>
            <ImageBackground
              source={image}
              imageStyle={styles.imageStyles}
              style={styles.imageBackgroundStyle}
              resizeMode="cover">
              <View style={styles.addProfileView}>
                <Text style={[styles.titleText, styles.addProfiletext]}>
                  Add Profile Photo
                </Text>
                <View style={styles.plusIcon}>
                  <Text style={styles.plusText}>+</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.sectionView}>
            <Text
              style={[
                styles.titleText,
                styles.inputContainer,
                styles.aboutText,
              ]}>
              About You
            </Text>
            <CustomTextfield
              // inputRef={input => (this.textInput[0] = input)}
              placeHolder="First Name*"
              onChangeText={firstname => setFirstname(firstname)}
              capitalize="sentences"
              // textValue={this.state.firstname}
              keyboard="default"
              secureText={false}
              containerStyle={styles.inputContainer}
              
              // onFocus={() => this.handleFocus(0)}
              isEditable={signInBy == 'Apple' ? false : true}
            />
            <CustomTextfield
              // inputRef={input => (this.textInput[0] = input)}
              placeHolder="Last Name*"
              onChangeText={lastname => setLastname(lastname)}
              capitalize="sentences"
              // textValue={this.state.firstname}
              keyboard="default"
              secureText={false}
              containerStyle={styles.inputContainer}
              // onFocus={() => this.handleFocus(0)}
              isEditable={signInBy == 'Apple' ? false : true}
            />
            <CustomTextfield
              // inputRef={input => (this.textInput[0] = input)}
              placeHolder="Job Title*"
              onChangeText={jobtitle => setjobtitle(jobtitle)}
              capitalize="sentences"
              // textValue={this.state.firstname}
              keyboard="default"
              secureText={false}
              containerStyle={styles.inputContainer}
              // onFocus={() => this.handleFocus(0)}
              isEditable={signInBy == 'Apple' ? false : true}
            />

            <CustomTextfield
              // inputRef={input => (this.textInput[0] = input)}
              placeHolder="Company Name*"
              onChangeText={companyname => setCompanyname(companyname)}
              capitalize="sentences"
              // textValue={this.state.firstname}
              keyboard="default"
              secureText={false}
              containerStyle={styles.inputContainer}
              // onFocus={() => this.handleFocus(0)}
              isEditable={signInBy == 'Apple' ? false : true}
            />
            <Text
              style={[
                styles.titleText,
                styles.inputContainer,
                styles.contactText,
              ]}>
              Contact Info
            </Text>

            <CustomTextfield
              // inputRef={input => (this.textInput[0] = input)}
              placeHolder="Company Email*"
              onChangeText={email => setEmail(email)}
              capitalize="sentences"
              // textValue={this.state.firstname}
              keyboard="default"
              secureText={false}
              containerStyle={styles.inputContainer}
              // onFocus={() => this.handleFocus(0)}
              isEditable={signInBy == 'Apple' ? false : true}
            />

            <CustomTextfield
              // inputRef={input => (this.textInput[0] = input)}
              placeHolder="Contact Number*"
              onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
              capitalize="sentences"
              // textValue={this.state.firstname}
              // keyboard="default"
              keyboardType="numeric"
              secureText={false}
              containerStyle={styles.inputContainer}
              // onFocus={() => this.handleFocus(0)}
              isEditable={signInBy == 'Apple' ? false : true}
            />

            <CustomTextfield
              // inputRef={input => (this.textInput[0] = input)}
              placeHolder="Location*"
              onChangeText={location => setLocation(location)}
              capitalize="sentences"
              // textValue={this.state.firstname}
              keyboard="default"
              secureText={false}
              containerStyle={styles.inputContainer}
              // onFocus={() => this.handleFocus(0)}
              isEditable={signInBy == 'Apple' ? false : true}
            />
            <Text
              style={[
                styles.titleText,
                styles.inputContainer,
                styles.linkText,
              ]}>
              Links
            </Text>
            <View style={styles.spanTextView}>
              <TextInput
                placeholder="20 characters maximum."
                style={styles.input}
                autoCapitalize="sentences"
                maxLength={20}
                // onChangeText={(text) => this.addValues(text, index, 'linkname')}
                onChangeText={SocialLinkName =>
                  setSocialLinkName(SocialLinkName)
                }
              />
              <TextInput
                placeholder="80 characters maximum."
                maxLength={80}
                autoCapitalize="sentences"
                multiline={true}
                // defaultValue={cur.linkDescri}
                style={[
                  styles.input,
                  styles.inputContainer,
                  styles.description,
                ]}
                // onChangeText={(text) => this.addValues(text, index, 'linkDescri')}
                onChangeText={SocialLinkDescrip =>
                  setSocialLinkDescrip(SocialLinkDescrip)
                }
              />
              <TextInput
                placeholder="http://"
                style={styles.input}
                // defaultValue={cur.urlLink}
                multiline={true}
                editable={false}
                autoCapitalize="none"
                dataDetectorTypes="link"
                // onChangeText={(text) => this.addValues(text, index, 'urlLink')}
                onChangeText={socialLink => setSocialLink(socialLink)}
              />
            </View>

            {/* <DraggableFlatList
              scrollEnabled={false}
              data={this.state.textInput}
              renderItem={this.renderData}
              keyExtractor={(item, index) => `draggable-item-${index}`}
              onDragEnd={({data, from, to}) => this.endDrag(data, from, to)}
            />*/}
            <View style={styles.removeView}>
              <View style={styles.removeSubView}>
                <TouchableOpacity
                  style={styles.removeTouchable}
                  // onPress={() => this.removeTextInput()}
                  onPress={() => alert('Remove Called...')}>
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>

              <View>
                <TouchableOpacity
                  // onPress={() => this.addTextInput(this.state.textInput.length)}
                  onPress={() => alert('Add Links Called...')}
                  style={styles.addLinkTouchable}>
                  <View style={styles.addLinkView}>
                    <Text style={styles.addLinkText}>Add Links</Text>
                  </View>

                  <View style={styles.angelButton}>
                    <Image
                      style={styles.angelImage}
                      source={IMAGE_CONSTANT.ADD}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    backgroundColor: '#fff',
    // marginLeft: 10,
    // margin: wp('10%'),
    // marginRight: 10,
    // borderRadius: 10,
    // marginTop: 10,
    // marginBottom: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    borderColor: 'lightgray',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
  },
  input1: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  imageStyles: {
    borderRadius: 10,
  },
  imageBackgroundStyle: {
    height: 200,
    width: '103%',
    justifyContent: 'center',
    marginRight: 6,
  },
  addProfileView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addProfiletext: {color: 'gray', alignSelf: 'center'},
  plusIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  plusText: {
    color: '#DD0000',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  spanTextView: {
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  textArea: {
    width: '95%',
    marginLeft: 10,
    height: 80,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  profilePicContainer: {
    // marginTop: 5,
    marginTop: wp('0%'),
    flex: 1,
    marginBottom: 10,
  },
  titleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  sectionView: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    marginTop: 10,
  },
  description: {
    width: '95%',
    marginLeft: 10,
    height: 80,
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  removeView: {
    alignSelf: 'flex-end',
    marginRight: 20,
    flexDirection: 'row',
  },
  removeSubView: {marginTop: 10},
  removeTouchable: {
    justifyContent: 'center',
    borderWidth: 1,
    width: 80,
    height: 30,
    borderRadius: 10,
  },
  removeText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  linkText: {marginTop: 25},
  contactText: {marginTop: 25},
  aboutText: {
    marginTop: 25,
  },
  addLinkTouchable: {flexDirection: 'row', marginTop: 10},
  addLinkView: {marginLeft: 15, justifyContent: 'center'},
  addLinkText: {fontSize: 15, fontWeight: 'bold'},
  angelButton: {
    // marginTop: 15,
    width: 30,
    height: 30,
    // alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowOffset: {height: 0, width: 0},
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    // alignContent: 'center',
    // alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  angelImage: {
    width: 15,
    height: 20,
    alignSelf: 'center',
  },
});
