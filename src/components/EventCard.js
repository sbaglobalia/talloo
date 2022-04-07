import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import React from 'react';
import moment from 'moment';
import moments from 'moment-timezone';
import {WIDTH} from '../utils/Constant';
import {
  ltrim,
  formatDateTime,
  getEventCategoryImage,
} from '../helper/CommonHelper';

export default function EventCard(props) {
  const {item} = props;
  var timeZone = 'America/Boise';
  var event_date = moments(item.date.toDate());
  //below line needs common helper.js
  let eventDate = formatDateTime(event_date, 'YYYY-MM-DD HH');
  let eventTime = moment(new Date(event_date)).format('h:mm A');

  let descText = item.description.replace(/["']/g, '');
  let desText = descText.replace(/[&//"]/g, '');
  let eventCategory = item.eventType;

  //below line needs common helper.js
  // ? getEventCategoryImage(item.eventType) : '';
  return (
    <TouchableHighlight
      onPress={() => props.onPressItem(item)}
      underlayColor="transparent">
      <View style={styles.cardContainer}>
        <View style={styles.cardSubContainer}>
          <View style={styles.cardSubView}>
            <Text style={styles.headerText}>{ltrim(item.topic)}</Text>

            <Text style={[styles.dateText]}>
              {`${moment(new Date(item.date.toDate())).format('ddd')}, ${moment(
                new Date(item.date.toDate()),
              ).format('MMM DD')} @ ${eventTime}`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
    flex: 1,
    marginTop: WIDTH * 0.03,
    // shadowColor: "#000000",
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 0.5,
    //   width: 0.5
    // },
    // elevation: 3,
    marginLeft: WIDTH * 0.03,
    marginRight: WIDTH * 0.03,
  },
  cardSubContainer: {
    // margin: 10,
    // justifyContent: 'space-around',
    // alignItems: 'flex-start'
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardSubView: {
    margin: WIDTH * 0.04,
    flexDirection: 'column',
    flex: 1,
  },
  headerText: {
    fontSize: WIDTH * 0.047,
    fontWeight: 'bold',
    color: 'black',
    flexShrink: 1,
  },
  headerSublineText: {
    fontSize: 18,
    color: 'black',
  },
  descriptionText: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    marginTop: 15,
  },
  dateText: {
    fontSize: WIDTH * 0.04,
    color: 'black',
    fontWeight: '600',
  },
});
