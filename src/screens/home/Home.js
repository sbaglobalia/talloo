import {StyleSheet, Text, View, AppState, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function Home(props) {
  // const {latitude, longitude, currentUser} = props;

  const [eventList, setEventList] = useState();
  const [pastEventList, setPastEventList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [lastVisible, setLastVisible] = useState(null);
  const [latitude, setLatitude] = useState(props);
  const [longitude, setLongitude] = useState(props);
  const [error, setError] = useState(null);
  const [cityName, setCityName] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [nearestEventList, setNearestEventList] = useState([]);
  const [isLocationEnabled, setIsLocationEnabled] = useState(false);
  const [isTallooUser, setIsTallooUser] = useState('false');
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [markerArr, setMarkerArr] = useState([]);
  const [formatted_address, setFormatted_address] = useState('');
  const [switchType, setSwitchType] = useState('');
  const [appState, setAppState] = useState(AppState.currentState);
  const [eventType, setEventType] = useState('online');
  const [onlineEvent, setOnlineEvent] = useState([]);
  const [searchtext, setSearchtext] = useState('');
  const [filterList, setFilterList] = useState([]);
  const [tempLocalEventList, setTempLocalEventList] = useState([]);
  const [tempOnlineEventList, setTempOnlineEventList] = useState([]);
  const [tempPastEventList, setTempPastEventList] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [tempMyEventList, setTempMyEventList] = useState([]);
  const [myEventList, setMyEventList] = useState([]);
  const [viewAlert, setViewAlert] = useState(true);

  // useEffect(() => {
  //   function handleStateChange(state) {
  //     if (latitude == '' || longitude == '') {
  //       await getLocationPermission();
  //     } else {
  //       {
  //         latitude:latitude;
  //         longitude:longitude;
  //       }
  //     }
  //   }
  // }, []);
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
