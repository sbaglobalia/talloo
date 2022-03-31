import {
  StyleSheet,
  SafeAreaView,
  Platform,
  ScrollView,
  View,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';

const showImagePicker = index => {
  if (index == 0) {
    //Open camera
    ImagePicker.openCamera({
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
        const base64Str = {uri: 'data:image/jpeg;base64,' + image.data};
        // setState({
        //   eventImg: source,
        //   eventUri: base64Str,
        // });
      })
      .catch(e => {});
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
        const source = {
          uri:
            Platform.OS === 'android'
              ? image.path
              : image.path.replace('file://', ''),
        };
        const base64Str = {uri: 'data:image/jpeg;base64,' + image.data};
        setState({
          eventImg: source,
          eventUri: base64Str,
        });
      })
      .catch(e => console.log('gallery'));
  }
};

const getEvent = async () => {
  let userId = await getKeyForValue('userId');
  const {
    topic,
    description,
    hostedby,
    ticketUrl,
    meetingUrl,
    zoomUrl,
    location,
    address_one,
    address_two,
    city,
    state,
    zipcode,
    start_date,
    end_date,
    eventType,
    tallooUserType,
    eventImg,
    eventUri,
    eventCategory,
    audience,
  } = state;

  let isTallooUser = tallooUserType.find(e => e.isSelected == true);
  isTallooUser = isTallooUser
    ? isTallooUser.isSelected
    : isTallooUser[0].isSelected;

  const event = {
    date: start_date,
    description: description,
    endDate: end_date,
    hostedBy: hostedby,
    image_url: eventImg,
    market: city,
    ticketUrl: ticketUrl,
    meetingUrl: meetingUrl,
    ZoomMeeting: zoomUrl,
    originatorId: userId,
    talloo_event: state.isTallooUser
      ? eventCategory === 'Talloo'
        ? true
        : ''
      : '',
    topic: topic,
    eventType: eventCategory,
    location: {
      locationName: location,
      addressOne: address_one,
      addressTwo: address_two,
      city: city,
      state: state,
      zip: zipcode,
    },
    Audience: audience,
  };
  return event;
};
export default function AddEvent(props) {
  const [eventImg, setEventImg] = useState('');

  useEffect(() => {
    eventImg: {
      uri: eventList.image_url;
    }
  });

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ActionSheet
        // ref={o => (AddEvent.ActionSheet = o)}
        title={'Select a Photo'}
        options={['Take Photo...', 'Choose from Library...', 'Cancel']}
        cancelButtonIndex={2}
        onPress={showImagePicker}
      />
      <ScrollView style={{flex: 1}} keyboardShouldPersistTaps={true}>
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
            <ImageBackground source={eventImg} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 15,
    marginRight: 15,
  },
});
