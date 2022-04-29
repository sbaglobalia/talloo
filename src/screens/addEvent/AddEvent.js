import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  ScrollView,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {isUrl} from '../../helper/CommonHelper';
import urlParse from 'url-parse';
import React, {useRef, useState} from 'react';
import OfflineNotice from '../../helper/OfflineNotice';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import CustomFooter from '../../components/CustomFooter';

import SectionView from './../../components/SectionView';
import {
  WIDTH,
  tallooEventCategorylist,
  eventCategorylist,
  adminAudiencelist,
  audiencelist,
} from '../../utils/Constant';
import {Dropdown} from 'react-native-material-dropdown-v2-fixed';
import {KeyboardAccessoryNavigation} from 'react-native-keyboard-accessory';

// import TimePicker from '../../components/TimePicker';
import moment from 'moment';
// import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
// import {Select, SelectItem} from '@ui-kitten/components';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {PLACE_API_KEY} from '../../helper/CommonHelper';

export default function AddEvent(props, {navigation}) {
  const [isOpenKeyboard, setisOpenKeyboard] = useState(false);

  const [isDisplayDate, setShow] = useState(false);
  const [displaymode, setMode] = useState('date');
  const [end_date, setEnd_date] = useState('');
  const [address12, setAddress12] = useState('');
  let categories = [
    {
      value: 'Banana',
    },
    {
      value: 'Mango',
    },
    {
      value: 'apple',
    },
  ];

  const eventType = [
    {
      label: 'Physical Location',
    },
    {
      label: 'Zoom',
    },
    {
      label: 'Virtual Event',
    },
  ];

  const actionSheetRef = useRef(null);
  const [location, setLocation] = useState('');
  const [eventImg, setEventImg] = useState('');
  const [textInput, setTextInput] = useState({});
  const [img, setImg] = useState('');
  const [topic, setTopic] = useState('');
  const [keyVal, setKeyVal] = useState('');
  const [focus, setFocus] = useState({});
  const [hostedby, setHostedby] = useState('');
  const [eventCategory, setEventCategory] = useState('');
  const [audience, setAudience] = useState('');
  const [description, setDescription] = useState('');
  const [height, setHeight] = useState(0);
  const [inline, setinline] = useState(false);
  const [pickerMode, setPickerMode] = useState(null);
  const [start_date, setStart_date] = useState('');
  const [ticketUrl, setTicketUrl] = useState('');
  const [address_one, setAddress_one] = useState('');
  const [address_two, setAddress_two] = useState('');
  const [city, setCity] = useState('');
  const [state, setstate] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [zoomUrl, setZoomUrl] = useState('');
  const [meetingUrl, setMeetingUrl] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [date, setDate] = useState(new Date());
  const [tallooUserType, setTallooUserType] = useState([
    {
      type: 'No',
      isSelected: true,
    },
    {
      type: 'Yes',
      isSelected: false,
    },
  ]);

  const [eventType1, setEventType1] = useState([
    {
      type: 'Physical Location',
      isSelected: true,
    },
    {
      type: 'Zoom',
      isSelected: false,
    },
    {
      type: 'Virtual Event',
      isSelected: false,
    },
  ]);
  const signUp = async () => {
    let isSelectedEventType = eventType.find(e => e.isSelected == true);
    isSelectedEventType = isSelectedEventType
      ? isSelectedEventType.type
      : eventType[0].type;
    if (isSelectedEventType == eventType[0].type) {
      setMeetingUrl({meetingUrl: '', zoomUrl: ''});
    }
    let isTallooUser = tallooUserType.find(e => e.isSelected == true);
    isTallooUser = isTallooUser
      ? isTallooUser.isSelected
      : isTallooUser[0].isSelected;
    if (topic === '' || description === '' || hostedby === '') {
      alert('Please add a topic, description and host.');
      return;
    } else if (start_date === '' || end_date === '') {
      // alert("Please provide a event date.")
      return;
    } else if (eventCategory === '' || eventCategory.trim() === '') {
      alert('Please select event type.');
      return;
    } else if (eventImg === '') {
      alert('Please select event image.');
      return;
    } else if (start_date === end_date) {
      alert('Your event cannot begin and end at the same time.');
      return;
    } else if (audience === '') {
      alert('Please select audience.');
      return;
    }

    if (isSelectedEventType != eventType[0].type) {
      if (eventType[2].isSelected && meetingUrl === '') {
        alert('Please provide a web address.');
        return;
      } else if (eventType[2].isSelected && !isUrl(`${meetingUrl}`)) {
        alert('Please provide a valid web address.');
        return;
      } else if (eventType[1].isSelected && zoomUrl != '') {
        //check url is zoom url or not
        const parsedUrl = urlParse(zoomUrl, true);
        let host = parsedUrl.host;
        if (host !== 'zoom.us') {
          alert('Please provide a valid zoom address.');
          return;
        }
      }
    } else if (isSelectedEventType == eventType[0].type) {
      if (
        location === '' ||
        address_two === '' ||
        city === '' ||
        state === '' ||
        zipcode === ''
      ) {
        alert('Please provide a complete address.');
        return;
      }
    }
    try {
      if (isUpdate == 1) {
        let event = await getEvent();
        let docId = eventList.eventId;

        //VIRTUAL EVENT
        if (isSelectedEventType != eventType[0].type) {
          this.setState({isLoading: true}, () => {
            this.props.updateEvent(docId, event);
          });
        } else {
          if (eventList.location.city == city) {
            event['coordinates'] = eventList.coordinates;

            this.setState({isLoading: true}, () => {
              this.props.updateEvent(docId, event);
            });
          } else {
            this.setState({isLoading: true}, () => {
              console.log('UPDATE EVENT LOCATION NEW CITY ========');
              this.getCurrentCityName(
                this.props.latitude,
                this.props.longitude,
              );
            });
          }
        }
      } else {
        let event = await this.getEvent();
        if (isSelectedEventType != eventType[0].type || meetingUrl != '') {
          this.setState({isLoading: true}, () => {
            this.props.addNewEvent(event);
          });
        } else {
          this.setState({isLoading: true}, () => {
            this.getCurrentCityName(this.props.latitude, this.props.longitude);
          });
        }
      }
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };
  const showImagePicker = index => {
    if (index == 0) {
      //Open camera
      ImagePicker.openCamera({
        width: 500,
        height: 500,
        cropping: true,
        avoidEmptySpaceAroundImage: true,
        cropperCircleOverlay: true,
        compressImageMaxWidth: 640,
        compressImageMaxHeight: 480,
        freeStyleCropEnabled: true,
        includeBase64: true,
      })
        .then(image => {
          const source = {
            uri:
              Platform.OS === 'android'
                ? image.path
                : image.path.replace('file://', ''),
          };
          // You can also display the image using data:
          const base64Str = {uri: 'data:image/jpeg;base64,' + image.data};
          console.log('allll===>', base64Str);
          setEventImg({
            eventImg: source,
            eventUri: base64Str,
          });
        })
        .catch(e => {
          console.log('Response e= ', e);
        });
    } else if (index == 1) {
      //Open from library
      ImagePicker.openPicker({
        width: 500,
        height: 500,
        cropping: true,
        cropperCircleOverlay: true,
        freeStyleCropEnabled: true,
        avoidEmptySpaceAroundImage: true,
        includeBase64: true,
        compressImageMaxWidth: 1000,
        compressImageMaxHeight: 1000,
        compressImageQuality: 1,
        compressVideoPreset: 'HighQuality',
        includeExif: true,
      })
        .then(image => {
          //this.ActionSheet.hide();
          const source = {
            uri:
              Platform.OS === 'android'
                ? image.path
                : image.path.replace('file://', ''),
          };
          const base64Str = {uri: 'data:image/jpeg;base64,' + image.data};
          console.log('allll===>', base64Str);
          setEventImg({
            eventImg: source,
            eventUri: base64Str,
          });
        })
        .catch(e => console.log('gallery'));
    }
  };

  const onChangeText = (key, val) => {
    setKeyVal({[key]: val});
    // console.log('vavavavav', val);
  };

  const handleFocus = index => () => {
    setFocus({
      previousFocusDisabled: index === 0,
      activeInputIndex: index,
    });
  };
  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const displayDatepicker = () => {
    showMode('date');
  };

  const selectedEvent = (index, isuserType = false) => {
    const some_array = isuserType ? [...tallooUserType] : [...eventType];
    some_array.map((item, i) => {
      if (i != index) {
        some_array[i].isSelected = false;
      } else {
        some_array[i].isSelected = true;
      }
    });
    if (isuserType) {
      setTallooUserType({tallooUserType: some_array});
    } else {
      setEventType1({eventType: some_array});
    }
  };
  const renderEventType = (item, index, userType) => (
    <View
      style={{
        marginTop: WIDTH * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          position: 'absolute',
          left: 0,
        }}>
        <TouchableOpacity
          onPress={() => {
            selectedEvent(index, userType);
          }}>
          <View
            style={{
              backgroundColor: item.isSelected ? '#DD0000' : '#EFEFF5',
              width: WIDTH * 0.06,
              height: WIDTH * 0.06,
              borderRadius: parseInt(WIDTH * 0.06 + WIDTH * 0.06) / 2,
              borderColor: 'lightgray',
              borderWidth: item.isSelected ? 0 : 1,
            }}
          />
        </TouchableOpacity>
      </View>

      <Text style={[styles.titleText, {marginLeft: WIDTH * 0.1}]}>
        {item.type}
      </Text>
    </View>
  );
  const selectAutoPlace = async address => {
    let cityexist;
    let stateexist;
    let buildingexist;
    let zip;

    let add = (cityexist = stateexist = buildingexist = zip = false);
    let addresses = {};
    try {
      await address.address_components.map(async res => {
        await res.types.map(area => {
          if (area === 'locality') {
            addresses['city'] = res.short_name;
            cityexist = true;
          }
          if (area === 'administrative_area_level_1') {
            addresses['state'] = res.short_name;
            stateexist = true;
          }
          if (area === 'country') {
            addresses['country'] = res.short_name;
          }
          if (area === 'street_number') {
            addresses['address_one'] = res.short_name;
            buildingexist = true;
          }
          if (area === 'route') {
            addresses['address_two'] = res.short_name;
          }
          if (area === 'postal_code') {
            addresses['zipcode'] = res.short_name;
            zip = true;
          }
        });
      });

      let add1 = buildingexist ? addresses['address_one'] : '';

      let add2 = addresses['address_two'] ? addresses['address_two'] : '';

      setAddress12({
        location: String(address.name).split(',')[0],
        address_one: add1,
        address_two: add2,
        city: cityexist ? addresses['city'] : '',
        state: stateexist ? addresses['state'] : '',
        zipcode: zip ? addresses['zipcode'] : '',
      });
    } catch (error) {
      alert(error);
    }
  };
  {
    /* const renderOption = title => {
    return (
      <SelectItem
        title={evaProps => (
          <Text {...evaProps} style={{color: 'black', fontSize: 18}}>
            {title}
          </Text>
        )}
      />
    );
  };*/
  }

  const setSelectedIndex = (index, src) => {
    let data;
    if (src == 1) {
      data = props.isTallooUser ? tallooEventCategorylist : eventCategorylist;
      setEventCategory({
        eventCategory: data[index.row].label,
      });
    } else {
      data = props.isTallooUser ? adminAudiencelist : audiencelist;
      setAudience({
        audience: data[index.row].label,
      });
    }
  };

  const setInline = () => {
    setinline({inline: !inline});
  };
  const showTimePicker = () => {
    setPickerMode({pickerMode: 'datetime'});
  };

  function inRange(x, min, max) {
    return (x - min) * (x - max) <= 0;
  }
  const hidePicker = () => {
    setPickerMode({pickerMode: null});
  };
  const handleDatePicked = date => {
    let selectedDate = moment(date).format('mm');
    if (inRange(selectedDate, 1, 15)) {
      date.setHours(date.getHours(), 15, 0, 0);
    } else if (inRange(selectedDate, 16, 30)) {
      date.setHours(date.getHours(), 30, 0, 0);
    } else if (inRange(selectedDate, 31, 45)) {
      date.setHours(date.getHours(), 45, 0, 0);
    } else if (inRange(selectedDate, 46, 59)) {
      date.setHours(date.getHours() + 1, 0, 0, 0);
    }

    setStart_date({start_date: date});
    hidePicker();
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <OfflineNotice />
      <ActionSheet
        ref={actionSheetRef}
        title={'Select a Photo'}
        options={['Take Photo...', 'Choose from Library...', 'Cancel']}
        cancelButtonIndex={2}
        // destructiveButtonIndex={1}
        onPress={showImagePicker}
      />
      <ScrollView style={{flex: 1}} keyboardShouldPersistTaps="always">
        <View style={[styles.container, {marginBottom: 10}]}>
          <View
            style={[
              styles.input,
              {
                height: 200,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              },
            ]}>
            <ImageBackground
              source={eventImg.eventUri}
              imageStyle={{
                borderRadius: 10,
              }}
              style={{
                height: 200,
                width: '100%',
                justifyContent: 'center',
                //alignItems: 'center',
              }}
              resizeMode="cover">
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={[
                    styles.titleText,
                    {color: 'gray', alignSelf: 'center'},
                  ]}>
                  Cover Image
                </Text>
                <TouchableOpacity onPress={() => actionSheetRef.current.show()}>
                  <View
                    style={{
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
                    }}>
                    <Image
                      source={require('../../../assets/add.png')}
                      style={[
                        {
                          width: '40%',
                          height: '50%',
                          resizeMode: 'contain',
                          justifyContent: 'center',
                          alignItems: 'center',
                        },
                      ]}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          <SectionView
            text={'EVENT DETAIL'}
            viewStyle={{
              marginTop: WIDTH * 0.05,
              backgroundColor: '#EFEFF5',
              width: '130%',
              marginLeft: -15,
              height: WIDTH * 0.15,
            }}
            textStyle={{marginLeft: WIDTH * 0.05, fontWeight: 'bold'}}
          />
          <View style={styles.sectionView}>
            <Text style={styles.titleText}>Title</Text>
            <TextInput
              ref={input => {
                textInput[0] = input;
              }}
              style={styles.input}
              autoCapitalize="sentences"
              onChangeText={val => onChangeText('topic', val)}
              value={topic}
              onFocus={handleFocus(0)}
            />
          </View>

          <View style={styles.sectionView}>
            <Text style={styles.titleText}>Host</Text>
            <TextInput
              ref={input => {
                textInput[1] = input;
              }}
              style={styles.input}
              autoCapitalize="sentences"
              onChangeText={val => onChangeText('hostedby', val)}
              value={hostedby}
              onFocus={handleFocus(1)}
            />
          </View>

          <View style={styles.sectionView}>
            <View>
              <Text style={[styles.titleText]}>Category</Text>
              <View>
                {/* <Select
              style={styles.select}
                  size="large"
                  placeholder="Select event type"
                  value={eventCategory}
                  onSelect={index => setSelectedIndex(index, 1)}>
                  {(props.isTallooUser
                    ? tallooEventCategorylist
                    : eventCategorylist
                  ).map(item => renderOption(item.label))}
                </Select>*/}

                <Dropdown
                  style={styles.select}
                  size="large"
                  icon="chevron-down"
                  iconColor="#EFEFF5"
                  label="Select event type"
                  data={categories}
                />
              </View>
            </View>
          </View>

          <View style={styles.sectionView}>
            <View>
              <Text style={[styles.titleText]}>Audience</Text>
              <View>
                {/* <Select
                                        style={styles.select}
                                        size='large'
                                        placeholder='Select event type'
                                        >
                                    </Select> */}

                <Dropdown
                  style={styles.select}
                  size="large"
                  icon="chevron-down"
                  iconColor="#EFEFF5"
                  label="Select audience"
                  data={categories}
                />
              </View>
            </View>
          </View>
          <View style={styles.sectionView}>
            <Text style={styles.titleText}>Description</Text>

            <TextInput
              style={[
                styles.input,
                ,
                {
                  height: Math.max(150, height),
                  textAlign: 'left',
                  textAlignVertical: 'top',
                  width: description.trim().length == 0 ? '100%' : '100%',
                },
              ]}
              ref={input => {
                textInput[2] = input;
              }}
              autoCapitalize="sentences"
              multiline={true}
              onChangeText={val => onChangeText('description', val)}
              // value={description}
              // onContentSizeChange={event =>
              //   setHeight({
              //     height: event.nativeEvent.contentSize.height,
              //   })
              // }
              onFocus={handleFocus(2)}
            />
          </View>
          <SectionView
            text={'Date & Time'}
            viewStyle={{
              marginTop: WIDTH * 0.05,
              backgroundColor: '#EFEFF5',
              width: '130%',
              marginLeft: -15,
              height: WIDTH * 0.15,
            }}
            textStyle={{marginLeft: WIDTH * 0.05, fontWeight: 'bold'}}
          />
          <View style={styles.sectionView}>
            <Text style={styles.titleText}>Begins</Text>
            <View
              style={{
                flexDirection: 'row',
                height: 50,
                borderWidth: 1,
                borderColor: '#b4b4b4',
                borderRadius: 5,
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{width: '35%'}}
                onPress={displayDatepicker}>
                {isDisplayDate && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={displaymode}
                    is24Hour={true}
                    display="default"
                    onChange={changeSelectedDate}
                  />
                )}
              </TouchableOpacity>
              <View>
                <Text style={{marginTop: 12}}>
                  {end_date != ''
                    ? moment(end_date).format('LLL')
                    : 'MM/DD/YYYY h:mm A'}
                </Text>
              </View>
            </View>
            <Text style={[styles.titleText, {marginTop: WIDTH * 0.05}]}>
              Ends
            </Text>
            <View
              style={{
                flexDirection: 'row',
                height: 50,
                borderWidth: 1,
                borderColor: '#b4b4b4',
                borderRadius: 5,
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{width: '35%'}}
                onPress={displayDatepicker}>
                {isDisplayDate && (
                  <DateTimePicker
                    value={date}
                    mode={displaymode}
                    is24Hour={true}
                    display="default"
                    onChange={changeSelectedDate}
                  />
                )}
              </TouchableOpacity>
              <View>
                <Text style={{marginTop: 12}}>
                  {end_date != ''
                    ? moment(end_date).format('LLL')
                    : 'MM/DD/YYYY h:mm A'}
                </Text>
              </View>
            </View>

            <SectionView
              text={'TICKETS'}
              viewStyle={{
                marginTop: WIDTH * 0.05,
                backgroundColor: '#EFEFF5',
                width: '130%',
                marginLeft: -15,
                height: WIDTH * 0.15,
              }}
              textStyle={{marginLeft: WIDTH * 0.05, fontWeight: 'bold'}}
            />
            <View style={styles.sectionView}>
              <Text style={styles.titleText}>Ticket Address</Text>
              <TextInput
                ref={input => {
                  textInput[3] = input;
                }}
                style={styles.input}
                autoCapitalize="sentences"
                onChangeText={val => onChangeText(val, 'ticketUrl')}
                // value={ticketUrl}
                onFocus={handleFocus(3)}
              />
            </View>
            <SectionView
              text={'TYPE OF EVENT'}
              viewStyle={{
                marginTop: WIDTH * 0.05,
                backgroundColor: '#EFEFF5',
                width: '130%',
                marginLeft: -15,
                height: WIDTH * 0.15,
              }}
              textStyle={{marginLeft: WIDTH * 0.05, fontWeight: 'bold'}}
            />
            {eventType.map((item, index) => {
              return renderEventType(item, index, false);
            })}
            <SectionView
              text={'LOCATION'}
              viewStyle={{
                marginTop: WIDTH * 0.05,
                backgroundColor: '#EFEFF5',
                width: '130%',
                marginLeft: -15,
                height: WIDTH * 0.15,
              }}
              textStyle={{marginLeft: WIDTH * 0.05, fontWeight: 'bold'}}
            />

            {eventType[0].isSelected ? (
              <View style={styles.sectionView}>
                <Text style={[styles.titleText]}>Venue Name</Text>
                <GooglePlacesAutocomplete
                  ref={input => {
                    textInput[4] = input;
                  }}
                  text={location}
                  placeholder=""
                  minLength={1} // minimum length of text to search
                  autoFocus={false}
                  fetchDetails={true}
                  onPress={(data, details = null) => selectAutoPlace(details)}
                  getDefaultValue={() => {
                    return ''; // text input default value
                  }}
                  onFocus={handleFocus(4)}
                  query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: PLACE_API_KEY,
                    language: 'en', // language of the results
                    // default: 'geocode'
                  }}
                  listViewDisplayed={false}
                  //autoFocus={true}
                  styles={{
                    textInputContainer: [
                      {
                        backgroundColor: 'transparent',
                        marginLeft: 0,
                        marginRight: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                      },
                      styles.input,
                    ],
                    textInput: {
                      fontSize: 18,
                      fontWeight: '500',
                      // marginTop: 10,
                      color: 'black',
                      padding: 0,
                    },
                    // description: {
                    //     fontWeight: 'bold',
                    // },
                    predefinedPlacesDescription: {
                      color: '#1faadb',
                    },
                    container: {
                      justifyContent: 'flex-start',
                      marginTop: 10,
                    },
                  }}
                  nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                  GoogleReverseGeocodingQuery={
                    {
                      // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }
                  }
                  GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance',
                    types: 'food',
                  }}
                  GooglePlacesDetailsQuery={{
                    // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
                    fields: 'address_component',
                  }}
                  filterReverseGeocodingByTypes={[
                    'locality',
                    'administrative_area_level_3',
                  ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                />

                <Text style={[styles.titleText, {marginTop: WIDTH * 0.05}]}>
                  Building Number, Site, Floor, etc.
                </Text>
                <TextInput
                  ref={input => {
                    textInput[6] = input;
                  }}
                  editable={false}
                  style={[styles.input, {backgroundColor: 'lightgray'}]}
                  autoCapitalize="sentences"
                  onChangeText={val => onChangeText('address_two', val)}
                  value={`${address_one} ${address_two}`}
                  onFocus={handleFocus(6)}
                />
                <Text style={[styles.titleText, {marginTop: WIDTH * 0.05}]}>
                  City
                </Text>
                <TextInput
                  ref={input => {
                    textInput[7] = input;
                  }}
                  style={[styles.input, {backgroundColor: 'lightgray'}]}
                  editable={false}
                  autoCapitalize="sentences"
                  onChangeText={val => onChangeText('city', val)}
                  value={city}
                  onFocus={handleFocus(7)}
                />
                <Text style={[styles.titleText, {marginTop: WIDTH * 0.05}]}>
                  State
                </Text>
                <TextInput
                  ref={input => {
                    textInput[8] = input;
                  }}
                  style={[styles.input, {backgroundColor: 'lightgray'}]}
                  editable={false}
                  autoCapitalize="sentences"
                  onChangeText={val => onChangeText('state', val)}
                  value={state}
                  onFocus={handleFocus(8)}
                />
                <Text style={[styles.titleText, {marginTop: WIDTH * 0.05}]}>
                  Zip
                </Text>
                <TextInput
                  ref={input => {
                    textInput[9] = input;
                  }}
                  style={[styles.input, {backgroundColor: 'lightgray'}]}
                  editable={false}
                  autoCapitalize="sentences"
                  onChangeText={val => onChangeText('zipcode', val)}
                  value={zipcode}
                  keyboardType="number-pad"
                  onFocus={handleFocus(9)}
                />
              </View>
            ) : eventType[1].isSelected ? (
              <View style={styles.sectionView}>
                <Text style={styles.titleText}>Zoom Meeting Address</Text>
                <TextInput
                  ref={input => {
                    textInput[4] = input;
                  }}
                  style={[styles.input]}
                  autoCapitalize="none"
                  onChangeText={val => onChangeText('zoomUrl', val)}
                  value={zoomUrl}
                  numberOfLines={2}
                  onFocus={handleFocus(4)}
                />
              </View>
            ) : (
              <View style={styles.sectionView}>
                <Text style={styles.titleText}>Web Address</Text>
                <TextInput
                  ref={input => {
                    textInput[4] = input;
                  }}
                  style={[styles.input]}
                  autoCapitalize="none"
                  onChangeText={val => onChangeText('meetingUrl', val)}
                  // value={meetingUrl}
                  numberOfLines={2}
                  onFocus={handleFocus(4)}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <KeyboardAccessoryNavigation
        style={{}}
        avoidKeyboard
        androidAdjustResize
        inSafeAreaView={true}
        tintColor={'grey'}
        doneButtonTitleStyle={{
          color: '#007AFF',
          fontSize: 14,
          fontWeight: 'bold',
        }}
        // onNext={this.focusNextTextInput}
        // onPrevious={this.focusPreviousTextInput}
        // previousHidden={this.state.activeInputIndex === 0}
        // nextHidden={this.state.activeInputIndex === 4 || this.state.activeInputIndex == 9}
      ></KeyboardAccessoryNavigation>
      {!isOpenKeyboard ? (
        <CustomFooter
          navigation={props.navigation}
          showSaveEvent={true}
          eventTitle={'Save Event'}
          addEvent={signUp}
        />
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#EFEFF5',
    padding: 8,
    borderRadius: 10,
    borderColor: 'lightgray',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
    color: 'black',
  },
  selectContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  select: {
    flex: 1,
    margin: 2,
    marginTop: 10,
  },
  activityIndicator: {
    position: 'absolute',
    alignSelf: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  stateInput: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    fontSize: 18,
    fontWeight: '500',
    padding: 8,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
  },
  sectionView: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '100%',
    marginTop: WIDTH * 0.05,
  },
  titleText: {
    fontSize: WIDTH * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitleText: {
    fontSize: WIDTH * 0.04,
    color: 'black',
    fontWeight: '500',
    marginTop: 5,
  },
  buttonView: {
    width: '100%',
    height: 45,
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: '#DD0000',
    marginTop: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#DD0000',
    alignSelf: 'center',
    textAlign: 'center',
  },
});

const statePickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    height: 50,
    backgroundColor: 'lightgray',
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
    backgroundColor: 'lightgray',
    padding: 8,
    color: 'black',
    borderRadius: 10,
    borderColor: 'lightgray',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
  inputPicker: {
    width: '100%',
    height: 50,
    backgroundColor: '#EFEFF5',
    padding: 8,
    color: 'black',
    borderRadius: 10,
    borderColor: 'lightgray',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    height: 50,
    backgroundColor: '#EFEFF5',
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
    backgroundColor: '#EFEFF5',
    padding: 8,
    color: 'black',
    borderRadius: 10,
    borderColor: 'lightgray',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
});

const customStyles = StyleSheet.create({
  dateInput: {
    //flex: 1,
    height: 45,
    borderWidth: 0,
    borderColor: 'transparent',
    alignContent: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 5,
  },
  dateText: {
    color: 'black',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '500',
  },
});
