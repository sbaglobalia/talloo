import React, {Component} from 'react';
import {
  AppState,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Text,
  Platform,
  PermissionsAndroid,
  RefreshControl,
  TouchableHighlight,
  ScrollView,
  Linking,
  Alert,
  StatusBar,
} from 'react-native';
import {ScrollableTabView} from '@summerkiflain/react-native-scrollable-tabview';
import {SearchBar} from 'react-native-elements';
import {WIDTH, HEIGHT} from '../../utils/Constant';
import {useNavigation} from '@react-navigation/native';
import TeamProfile from '../contact/ContactProfile';
import Profile from '../profile/Profile';

export default function Groups(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.safeAreaContainer}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <ScrollableTabView
        tabBarTextStyle={style.tabBarTextStyle}
        tabBarInactiveTextColor={'black'}
        tabBarActiveTextColor={'#DD0000'}
        tabBarUnderlineStyle={style.underlineStyle}
        initialPage={0}
        ref={tabView => {
          tabView = tabView;
        }}>
        <View key={'1'} tabLabel={'Near Me'} style={{}}>
          <ScrollView
            refreshControl={
              <RefreshControl
                // refreshing={}
                // onRefresh={}
                tintColor="#DD0605"
                colors={['red', 'green', 'blue']}
                title="Pull to fetch new Events"
              />
            }>
            <SearchBar
              placeholder="Search"
              // onChangeText={(val) => this.SearchFilterFunction(val)}
              // value={this.state.searchtext}
              inputContainerStyle={{
                backgroundColor: '#EFEFF5',
                height: WIDTH * 0.12,
                margin: WIDTH * 0.04,
              }}
              round={true}
              inputStyle={{color: 'black'}}
              //lightTheme={true}
              containerStyle={{
                backgroundColor: 'white',
                borderTopColor: 'white',
                borderBottomColor: 'white',
                height: WIDTH * 0.22,
              }}
            />
            <View style={{alignSelf: 'center', marginTop: 30}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  textAlign: 'center',
                  color: 'black',
                }}>
                There are no events in your area. Add an event.
              </Text>
            </View>
          </ScrollView>
        </View>

        <View key={'2'} tabLabel={'Past Events'} style={{}}>
          <ScrollView
            refreshControl={
              <RefreshControl
                // refreshing={}
                // onRefresh={}
                tintColor="#DD0605"
                colors={['red', 'green', 'blue']}
                title="Pull to fetch past Events"
              />
            }>
            <SearchBar
              placeholder="Search"
              // onChangeText={val => this.SearchFilterFunction(val)}
              // value={this.state.searchtext}
              inputContainerStyle={{
                backgroundColor: '#EFEFF5',
                height: WIDTH * 0.12,
                margin: WIDTH * 0.04,
              }}
              round={true}
              inputStyle={{color: 'black'}}
              //lightTheme={true}
              containerStyle={{
                backgroundColor: 'white',
                borderTopColor: 'white',
                borderBottomColor: 'white',
                height: WIDTH * 0.22,
              }}
            />

            <View style={{alignSelf: 'center', marginTop: 30}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  textAlign: 'center',
                  color: 'black',
                }}>
                There are no events in your area. Add an event.
              </Text>
            </View>
          </ScrollView>
        </View>
        <View key={'3'} tabLabel={'My Events'} style={{}}>
          <ScrollView
            refreshControl={
              <RefreshControl
                // refreshing={}
                // onRefresh={}
                tintColor="#DD0605"
                colors={['red', 'green', 'blue']}
                title="Pull to fetch your Events"
              />
            }>
            <SearchBar
              placeholder="Search"
              // onChangeText={(val) => this.SearchFilterFunction(val)}
              // value={this.state.searchtext}
              inputContainerStyle={{
                backgroundColor: '#EFEFF5',
                height: WIDTH * 0.12,
                margin: WIDTH * 0.04,
              }}
              round={true}
              inputStyle={{color: 'black'}}
              //lightTheme={true}
              containerStyle={{
                backgroundColor: 'white',
                borderTopColor: 'white',
                borderBottomColor: 'white',
                height: WIDTH * 0.22,
              }}
            />
            <View>
              <View style={{padding: 10, marginLeft: 10}}>
                <Text style={style.detailName}>Monday</Text>
              </View>
            </View>
            <View
              style={{
                borderRadius: 10,
                backgroundColor: '#fff',
                marginTop: 10,
                flexDirection: 'row',
                marginBottom: 10,
                width: '95%',
                alignSelf: 'center',
              }}>
              <TouchableOpacity onPress={() => navigation.navigate("ContactProfile")}>
                <View style={{padding: 10, marginLeft: 10}}>
                  <Text style={style.detailName}>Generations</Text>
                  <Text style={style.testDetails}>
                    Monday 1:00 AM - 2:00 PM
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{marginBottom: 30}}></View>
          </ScrollView>
        </View>
      </ScrollableTabView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: '#fafafa',
    zIndex: 0,
  },
  tabBarTextStyle: {
    fontSize: WIDTH * 0.04,
    fontWeight: 'bold',
  },
  testDetails: {
    fontSize: 16,
    marginLeft: 2,
    color: 'black',
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
    fontWeight: 'bold',
  },
  jobTitleText: {
    fontSize: 16,
    color: 'black',
    marginTop: 5,
    marginRight: 25,
  },
  detailName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  scrollStyle: {
    backgroundColor: 'white',
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
