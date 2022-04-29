import React, {Component, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
} from 'react-native';
import { ScrollableTabView } from '@summerkiflain/react-native-scrollable-tabview'
import {SearchBar} from 'react-native-elements';
import {
  WIDTH,
  PROFILE_IMAGE_CONSTANT,
  HEIGHT,
  TAB_FOOTER_IMAGE_CONSTANT,
} from '../../utils/Constant';
import FastImage from 'react-native-fast-image';


const allData = [
  {
    id: 1,
    firstname: 'Jahanvi',
    lastname: 'borse',
    Image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
  },
  {
    id: 2,
    firstname: 'Om',
    lastname: 'Rana',
    Image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
  },
  {
    id: 3,
    firstname: 'Sumit',
    lastname: 'patel',
    Image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
  },
  {
    id: 4,
    firstname: 'Rima',
    lastname: 'patel',
    Image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
  },
  {
    id: 5,
    firstname: 'Anish',
    lastname: 'Rana',
    Image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
  },
  {
    id: 6,
    firstname: 'Sunita',
    lastname: 'patel',
    Image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
  },
  {
    id: 7,
    firstname: 'palak',
    lastname: 'patil',
    Image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
  },
  {
    id: 8,
    firstname: 'Ritesh',
    lastname: 'sahani',
    Image: 'https://bootdey.com/img/Content/avatar/avatar1.png',
  },
  {
    id: 9,
    firstname: 'Mahavir',
    lastname: 'Hingu',
    Image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
  },
  {
    id: 10,
    firstname: 'Dhama',
    lastname: 'chauhan',
    Image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
  },
  {
    id: 11,
    firstname: 'Dhaval',
    lastname: 'jariwala',
    Image: 'https://bootdey.com/img/Content/avatar/avatar3.png',
  },
  {
    id: 12,
    firstname: 'zenam',
    lastname: 'ansari',
    Image: 'https://bootdey.com/img/Content/avatar/avatar2.png',
  },
];

export default ChatList = ({navigation}) => {
  const [data, setData] = useState(allData);
  const _renderListView = () => {
    return (
      <View>
        <FlatList
          style={{marginTop: 10}}
          data={data}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('ChatView')}>
                <View style={{flexDirection: 'column'}}>
                  <View
                    style={{
                      bottom: 0,
                      backgroundColor: 'lightgray',
                      height: 1,
                      width: '100%',
                    }}
                  />
                  <View style={style.containerView}>
                    <FastImage
                      style={{height: 40, width: 40, borderRadius: 40 / 2}}
                      source={{uri: item.Image}}
                    />
                    <View style={{marginLeft: 10, flexDirection: 'column'}}>
                      <Text style={style.titleText} numberOfLines={1}>
                        {item.firstname}
                      </Text>
                      <Text style={style.companyText} numberOfLines={1}>
                        {item.lastname}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={style.safeAreaContainer}>
   
      <ScrollableTabView
                tabBarTextStyle={style.tabBarTextStyle}
                tabBarInactiveTextColor={'black'}
                tabBarActiveTextColor={'#DD0000'}
                tabBarUnderlineStyle={style.underlineStyle}
                initialPage={0}

                ref={(tabView) => { tabView = tabView; }}
            >

        <View key={1} tabLabel={'Message'} style={{ }}>
          <View>{_renderListView()}</View>
        </View>

        <View key={2} tabLabel={'Referrals'} style={{ }}>
          <View>{_renderListView()}</View>
        </View>
        
      </ScrollableTabView> 
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  tabBarTextStyle: {
     fontSize: WIDTH * 0.04,
    fontWeight: 'bold',
  },
  underlineStyle: {
    height: 3,
    backgroundColor: 'red',
    borderRadius: 3,
    justifyContent: 'center',
  },
  flatListContainer: {
    marginLeft: 7,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 5,
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
  titleText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '600',
  },
  jobTitleText: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
    marginRight: 25,
  },
  containerView: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    width: '100%',
    height: 45,
    backgroundColor: '#F0F0F0',
    padding: 8,
    borderRadius: 10,
    borderColor: 'lightgray',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});