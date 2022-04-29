import React, {Component, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  StatusBar,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {ScrollableTabView} from '@summerkiflain/react-native-scrollable-tabview';
import {
  WIDTH,
  PROFILE_IMAGE_CONSTANT,
  HEIGHT,
  TAB_FOOTER_IMAGE_CONSTANT,
} from '../../utils/Constant';
import {useNavigation} from '@react-navigation/native';
import TeamDetails from './TeamDetails';

export default function Groups() {
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
                title="Pull to Refresh your Teams"
              />
            }>
            <View>
              <View style={{padding: 10, marginLeft: 10}}>
                <Text style={style.detailName}>Monday</Text>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Velocity</Text>
                    <Text style={style.testDetails}>
                      Monday 09:00 AM - 10:00 AM
                    </Text>
                  </View>
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Catalina</Text>
                    <Text style={style.testDetails}>
                      Monday 09:00 AM - 10:00 AM
                    </Text>
                  </View>
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Generations</Text>
                    <Text style={style.testDetails}>
                      Monday 1:00 AM - 2:00 PM
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{marginBottom: 30}}></View>
            </View>

            <View>
              <View style={{padding: 10, marginLeft: 10}}>
                <Text style={style.detailName}>Tuesday</Text>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Velocity</Text>
                    <Text style={style.testDetails}>
                      Tuesday 09:00 AM - 10:00 AM
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginBottom: 30}}></View>

            <View>
              <View style={{padding: 10, marginLeft: 10}}>
                <Text style={style.detailName}>Wedenesday</Text>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Generations</Text>
                    <Text style={style.testDetails}>
                      Wedenesday 1:00 AM - 2:00 PM
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        <View key={'2'} tabLabel={'My Groups'} style={{}}>
          <ScrollView
            refreshControl={
              <RefreshControl
                // refreshing={}
                // onRefresh={}
                tintColor="#DD0605"
                colors={['red', 'green', 'blue']}
                title="Pull to Refresh your Teams"
              />
            }>
            <View>
              <View style={{padding: 10, marginLeft: 10}}>
                <Text style={style.detailName}>Monday</Text>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Velocity</Text>
                    <Text style={style.testDetails}>
                      Monday 09:00 AM - 10:00 AM
                    </Text>
                  </View>
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Catalina</Text>
                    <Text style={style.testDetails}>
                      Monday 09:00 AM - 10:00 AM
                    </Text>
                  </View>
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Generations</Text>
                    <Text style={style.testDetails}>
                      Monday 1:00 AM - 2:00 PM
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{marginBottom: 30}}></View>
            </View>

            <View>
              <View style={{padding: 10, marginLeft: 10}}>
                <Text style={style.detailName}>Tuesday</Text>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Velocity</Text>
                    <Text style={style.testDetails}>
                      Tuesday 09:00 AM - 10:00 AM
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginBottom: 30}}></View>

            <View>
              <View style={{padding: 10, marginLeft: 10}}>
                <Text style={style.detailName}>Wedenesday</Text>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Generations</Text>
                    <Text style={style.testDetails}>
                      Wedenesday 1:00 AM - 2:00 PM
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        <View key={'3'} tabLabel={'All Groups'} style={{}}>
          <ScrollView
            refreshControl={
              <RefreshControl
                // refreshing={}
                // onRefresh={}
                tintColor="#DD0605"
                colors={['red', 'green', 'blue']}
                title="Pull to Refresh your Teams"
              />
            }>
            <View>
              <View style={{padding: 10, marginLeft: 10}}>
                <Text style={style.detailName}>Monday</Text>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Velocity</Text>
                    <Text style={style.testDetails}>
                      Monday 09:00 AM - 10:00 AM
                    </Text>
                  </View>
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Catalina</Text>
                    <Text style={style.testDetails}>
                      Monday 09:00 AM - 10:00 AM
                    </Text>
                  </View>
                </TouchableOpacity>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Generations</Text>
                    <Text style={style.testDetails}>
                      Monday 1:00 AM - 2:00 PM
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{marginBottom: 30}}></View>
            </View>

            <View>
              <View style={{padding: 10, marginLeft: 10}}>
                <Text style={style.detailName}>Tuesday</Text>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate(TeamDetails)}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Velocity</Text>
                    <Text style={style.testDetails}>
                      Tuesday 09:00 AM - 10:00 AM
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginBottom: 30}}></View>

            <View>
              <View style={{padding: 10, marginLeft: 10}}>
                <Text style={style.detailName}>Wedenesday</Text>
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
                <TouchableOpacity
                  onPress={() => navigation.navigate('TeamDetails')}>
                  <View style={{padding: 10, marginLeft: 10}}>
                    <Text style={style.detailName}>Generations</Text>
                    <Text style={style.testDetails}>
                      Wedenesday 1:00 AM - 2:00 PM
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
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
