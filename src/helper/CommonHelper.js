import {Linking, Alert, Animated, useState} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moments from 'moment-timezone';
import moment from 'moment';
import {EVENT_CATEGORY_CONSTANT} from '../../../talloo/src/utils/Constant';

export const PLACE_API_KEY = 'AIzaSyD9PhX_x-6NqPQKgqLrRkT906VllHkQjnk'; //"AIzaSyAoSw_L8e7DEzMRE8Bz-7JecFc77X0SpLs";
export const TERMS_USE = 'https://www.talloo.com/terms-of-use';
export const PRIVACY_POLICY = 'https://www.talloo.com/privacy-policy';
export const ACCEPTANCE_USE = 'https://www.talloo.com/acceptable-use-policy';
export const decodeHtmlEntity = function (str) {
  if (str == null) return str;
  return str.replace(/#/g, '');
};
export const ltrim = function (str) {
  if (str == null) return str;
  return str.replace(/^\s+/g, '');
};

export const formatDateTime = function (date, format) {
  var timeZone = moments.tz.guess();
  var dateValue = moments(date);
  let formattedDate = dateValue.tz(timeZone).format(format);
  return formattedDate;
};

Math.radians = function (degrees) {
  return (degrees * Math.PI) / 180;
};

// Converts from radians to degrees.
Math.degrees = function (radians) {
  return (radians * 180) / Math.PI;
};

export function getDestination(lat1, lon1, d) {
  var R = 6378.1;
  var brng = 1.57;
  lat1 = Math.radians(lat1);
  lon1 = Math.radians(lon1);

  var lat2 = Math.asin(
    Math.sin(lat1) * Math.cos(d / R) +
      Math.cos(lat1) * Math.sin(d / R) * Math.cos(brng),
  );

  var lon2 =
    lon1 +
    Math.atan2(
      Math.sin(brng) * Math.sin(d / R) * Math.cos(lat1),
      Math.cos(d / R) - Math.sin(lat1) * Math.sin(lat2),
    );

  lat2 = Math.degrees(lat2);
  lon2 = Math.degrees(lon2);

  return {lat2, lon2};
}

export const setKeyForValue = async (key, value) => {
  try {
    const item = await AsyncStorage.setItem(key, value);
    return item;
  } catch (error) {
    // Error saving data
  }
};

export const getKeyForValue = async key => {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    return retrievedItem;
  } catch (error) {
    // console.log(error.message);
  }
};

export const sendMail = () => {
  Linking.openURL('mailto:hi@talloo.com?');
};

export const showAlert = (title, msg) => {
  Alert.alert(
    title,
    msg, // <- this part is optional, you can pass an empty string
    [{text: 'OK', onPress: () => console.log('OK Pressed'), style: 'cancel'}],
    {cancelable: true},
  );
};

export const getTallooUser = async () => {
  let isTalloo = await getKeyForValue('isTalloo');
  return isTalloo;
};

export const validateEmail = email => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const isUrl = str => {
  // var pattern = new RegExp("^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");// fragment locator
  // return pattern.test(str);
  var pattern = new RegExp(
    '^(http|https|ftp)://' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(str);
};
//2015-06-05 date format
var REFERENCE = moment(); // fixed just for testing, use moment();
var TODAY = REFERENCE.clone().startOf('day');
var TOMORROW = REFERENCE.clone().add(1, 'days').startOf('day');
var YESTERDAY = REFERENCE.clone().subtract(1, 'days').startOf('day');
//minute
var MINUTE_BEFORE = REFERENCE.clone().subtract(1, 'minute').startOf('minutes');
var A_WEEK_OLD = REFERENCE.clone().subtract(7, 'days').startOf('day');

export function isToday(momentDate) {
  return momentDate.isSame(TODAY, 'd');
}

export function isMinuteBefore(momentDate) {
  return momentDate.isSame(MINUTE_BEFORE, 'm');
}

export function isTomorrow(momentDate) {
  return momentDate.isSame(TOMORROW, 'd');
}
export function isYesterday(momentDate) {
  return momentDate.isSame(YESTERDAY, 'd');
}
export function isWithinAWeek(momentDate) {
  return momentDate.isAfter(A_WEEK_OLD);
}
export function isTwoWeeksOrMore(momentDate) {
  return !isWithinAWeek(momentDate);
}

export const onScroll = (event, duration = 200) => {
  const currentOffset = event.nativeEvent.contentOffset.y + 65;
  const dif = currentOffset - (offset || 0);
  const offSet = new Animated.Value(0);
  const TAB_BAR_OFFSET = -65;
  if (dif > 5) {
    // on.setParams({ showTabBar: false });
    // // })
    EventRegister.emit('tabAnimationHide');
  } else {
    EventRegister.emit('tabAnimationShow');
  }

  offset = currentOffset;
};

export const magicScroll = (minVal, maxVal, offset, step = 1) => {
  let prevVal = 0;
  let heightVal = maxVal;
  let offsetVal = offset;

  step = Math.abs(step);

  const min = val => (val < minVal ? minVal : val);
  const max = val => (val > maxVal ? maxVal : val);
  const delta = val => {
    const dt = val - prevVal;
    prevVal = val;
    return dt;
  };

  return {
    calc: val => {
      const dt = val < 0 ? 0 : delta(val);

      if (dt < 0 && heightVal == minVal) {
        //decrement offset value until it reaches zero
        offsetVal += dt;
        if (offsetVal > 0) {
          return heightVal;
        }
        offsetVal = offset;
      } else if (dt > 0 && heightVal == maxVal) {
        offsetVal -= dt;
        if (offsetVal > 0) {
          return heightVal;
        }
        offsetVal = offset;
      }

      heightVal -= step * dt;

      heightVal = min(heightVal);
      heightVal = max(heightVal);

      return heightVal;
    },
    hide: () => {
      offsetVal = offset;
      heightVal = minVal;
    },
    show: () => {
      offsetVal = offset;
      heightVal = maxVal;
    },
  };
};

export function removeDuplicateFromArray(array, key) {
  const uniqueArray = Array.from(new Set(array.map(a => a.id))).map(id => {
    return array.find(a => a.id === id);
  });

  return uniqueArray;
}

export function getEventCategoryImage(type) {
  switch (type) {
    case 'OpenCircle':
      return EVENT_CATEGORY_CONSTANT.OPEN_CIRCLE;
    case 'MorningSocial':
      return EVENT_CATEGORY_CONSTANT.MORNING_SOCIAL;
    case 'EveningSocial':
      return EVENT_CATEGORY_CONSTANT.EVENING_SOCIAL;
    case 'GeneralBusiness':
      return EVENT_CATEGORY_CONSTANT.GENERAL_BUSINESS;
    case 'Construction':
      return EVENT_CATEGORY_CONSTANT.CONSTRUCTION;
    case 'Manufacturing':
      return EVENT_CATEGORY_CONSTANT.MANUFACTURING;
    case 'Agriculture':
      return EVENT_CATEGORY_CONSTANT.AGRICULTURE;
    case 'Medical':
      return EVENT_CATEGORY_CONSTANT.MEDICAL;
    case 'Talloo':
      return EVENT_CATEGORY_CONSTANT.TALLOO;
    default:
      break;
  }
}

export const exploreTrialPlanAlert = () => explorPlans => {
  Alert.alert(
    'Trial and User Level',
    'You must be subscribed to a Main Street plan or higher to access this feature.',
    [
      {
        text: 'Explore Plans',
        onPress: () => explorPlans(),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
};

export function exploreMidMarketPlanAlert(explorPlans) {
  Alert.alert(
    'Main Street Plan Member',
    'You must be subscribed to a Mid-Market plan to access this feature.',
    [
      {
        text: 'Explore Plans',
        onPress: () => explorPlans(),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
}
