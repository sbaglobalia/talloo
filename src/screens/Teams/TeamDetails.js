import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
  RefreshControl,
  Dimensions,
  StatusBar,
  TouchableHighlight,
  Alert,
  LayoutAnimation,
  FlatList,
  UIManager,
  SafeAreaView,
} from 'react-native';

import { PROFILE_IMAGE_CONSTANT, NEW_PROFILE_IMG } from '../../utils/Constant';
import ParallaxScrollView from 'react-native-parallax-scrollview';
import ViewMoreText from 'react-native-view-more-text';
import CustomFooter from '../../components/CustomFooter';
import { useNavigation } from '@react-navigation/native';

export default function TeamDetails(props) {

  const navigation = useNavigation();

  let SCREEN_HEIGHT = Dimensions.get('window').height;

  const Leader = {
    id: 1,
    firstname: "Frankwin",
    lastname: "Hooglander",
    position: "Owner",
    profile: "Treasure Valley Solutions",
    Image: "https://reactnative.dev/img/tiny_logo.png"
  };

  const allData = [
    {
      id: 1,
      firstname: "Paul",
      lastname: "Anderson",
      position: "Senior Loan Officer",
      profile: "Primary Residential Mortgage Inc",
      Image: "https://bootdey.com/img/Content/avatar/avatar3.png"
    },
    {
      id: 2,
      firstname: "Tanya",
      lastname: "Heilman",
      position: "Owner, Design",
      profile: "Gotcha Covered Of Eagle",
      Image: "https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
      id: 3,
      firstname: "Matthew",
      lastname: "Schoener",
      position: "Realtor",
      profile: "Homes of Idaho",
      Image: "https://bootdey.com/img/Content/avatar/avatar2.png"
    },
  ]
  const [dataa, setData] = useState(allData);


  const renderViewMoreDescription = (onPress) => {
    return (
    <TouchableHighlight
      style={styles.angelButton}
      onPress={onPress}
      underlayColor="#f1f1f1">
      <Image
        style={styles.angelImage}
        source={PROFILE_IMAGE_CONSTANT.ANGEL_DOWN}
      ></Image>
    </TouchableHighlight>)
  }
  const renderViewLessDescription = (onPress) => {
    return (<TouchableHighlight
      style={[styles.angelButton, { backgroundColor: '#DD0000' }]}
      onPress={onPress}
      underlayColor="#f1f1f1">
      <Image
        style={styles.angelImage}
        source={PROFILE_IMAGE_CONSTANT.ANGEL_UP_WHITE}
      ></Image>
    </TouchableHighlight>)
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <ParallaxScrollView
        windowHeight={SCREEN_HEIGHT * 0.4}
        backgroundSource={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        navBarTitle={'Velocity'}
        userName=" "
        userTitle=" "
        userImage=""
        headerView={null}
      >
        <ScrollView
          style={{
            borderTopLeftRadius: 25, borderTopRightRadius: 25, marginTop: -20, backgroundColor: "#fff"
          }} refreshControl={
            <RefreshControl
              // refreshing={}
              // onRefresh={}
              tintColor='#DD0605'
              colors={["red", "green", "blue"]}
              title='Pull to fetch your Teams Details'
            />
          }
          keyboardDismissMode="interactive">

          <View style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
            <View style={{ marginLeft: 15, marginTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>Velocity</Text>
            </View>
            <View style={{ marginLeft: 15, marginTop: 15 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>B2C Sales</Text>
            </View>

            <View style={[styles.subViewContainer]}>

              <View>

                <View style={[styles.subViewContainer, { marginTop: 15 }]}>
                  <ViewMoreText
                    numberOfLines={4}
                    renderViewMore={renderViewMoreDescription}
                    renderViewLess={renderViewLessDescription}
                    textStyle={{}}
                  >
                    <Text style={[styles.subTitleText, { marginTop: 10 }]}>macOS Catalina, aka macOS 10.15, is an older version of the operating system that runs on the Mac. macOS Catalina's name was inspired by Santa Catalina Island, popularly known as Catalina and one of the Channel Islands off the coast of Southern California. macOS Catalina preceded macOS Big Sur.
                      In macOS Catalina, Apple has eliminated the iTunes app that's been a staple of the Mac operating system since 2001. iTunes was split into three apps: Music, Podcasts, and TV. The new apps are similar in function to iTunes now, but are split up by feature. You can still manage your devices in Catalina, but it's now done through the Finder rather than through an app. Syncing media can be done using the Apple TV, Podcasts, or Music apps.
                    </Text>
                  </ViewMoreText>


                </View>

              </View>

            </View>

            <View style={[styles.container, { marginBottom: 10 }]}></View>
            <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 10, marginBottom: 10 }}>
              <View style={{ width: "9%", }}>
                <Image style={{ width: 22, height: 25, alignSelf: "center" }} source={require("../../../assets/MsgEvent/calendarSolid.png")} />
              </View>
              <View style={{ width: "67%", marginLeft: 5 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Date & Time</Text>
                <Text style={{ fontSize: 16, }}>Monday</Text>
                <Text style={{ fontSize: 16, }}>09:00 AM - 10:00 AM</Text>
              </View>
              <View style={{ width: "20%", }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>MTD</Text>
              </View>
            </View>
            <View>
              <View style={[styles.container, { marginBottom: 30 }]}></View>
              <View style={{ flexDirection: "row", marginTop: 5, marginLeft: 10, marginBottom: 10 }}>
                <View style={{ width: "9%", }}>
                  <Image style={{ width: 15, height: 26, alignSelf: "center" }} source={require("../../../assets/MsgEvent/dollarSignSolid.png")} />
                </View>
                <View style={{ width: "67%", marginLeft: 5 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Membership Required</Text>
                  <Text style={{ fontSize: 16, marginTop: 10 }}>B2C Sales</Text>
                </View>
                <View style={{ width: "20%", }}>
                </View>
              </View>
            </View>
            <View>
              <View style={[styles.container, { marginBottom: 30 }]}></View>
              <View style={{ flexDirection: "row", marginTop: 0, marginLeft: 10, marginBottom: 10 }}>
                <View style={{ width: "9%", }}>
                  <Image style={{ width: 24, height: 25, alignSelf: "center" }} source={require("../../../assets/Event/ic_event_location.png")} />
                </View>
                <View style={{ width: "67%", marginLeft: 5 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>Location</Text>

                  <View style={{ marginTop: 10 }}>
                    <TouchableOpacity >
                      <Text style={{ fontSize: 16, }}>5254 W Chinden Blvd</Text>
                      <Text style={{ fontSize: 16, }}>Garden City,ID 83714</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ width: "20%", }}>
                </View>
              </View>
              <View style={[styles.container, { marginBottom: 20 }]}></View>
              <View style={{ marginTop: 10, marginLeft: 15 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Leader</Text>
              </View>
              <View >
                <TouchableOpacity style={{ flexDirection: "row", marginTop: 20, marginLeft: 10 }} onPress={() => navigation.navigate("TeamProfile", { itemData: Leader })}>
                  <View style={{ width: 50, height: 50, elevation: 12, backgroundColor: "#fff", borderRadius: 40, marginLeft: 10 }}>
                    <Image style={{ resizeMode: "cover", width: 50, height: 50, borderRadius: 40 }} source={{ uri: Leader.Image }} />
                  </View>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{Leader.firstname}{Leader.lastname}</Text>
                    <View style={{ width: "90%" }}>
                      <Text style={{ fontSize: 14, }}>{Leader.position}</Text>
                      <Text style={{ fontSize: 14, }}>{Leader.profile}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 20, marginLeft: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Members</Text>
              </View>
              <FlatList
                data={dataa}
                horizontal={false}

                keyExtractor={(item) => {

                  
                  return item.id;
                }}
                renderItem={({ item }) => {

                  return (
                    <View >
                      <TouchableOpacity style={{ flexDirection: "row", marginTop: 20, marginLeft: 30 }} onPress={() => navigation.navigate("TeamProfile", { itemData: item })}>
                        <View style={{ width: 50, height: 50, elevation: 12, backgroundColor: "#fff", borderRadius: 40, marginLeft: 10 }}>
                          <Image style={{ resizeMode: "cover", width: 50, height: 50, borderRadius: 40 }} source={{ uri: item.Image }} />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.firstname} {item.lastname}</Text>
                          <View style={{ width: "95%" }}>
                            <Text style={{ fontSize: 14, }}>{item.position} </Text>
                            <Text style={{ fontSize: 14, }}>{item.profile}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  )
                }}
              />
            </View>
          </View>
        </ScrollView>
      </ParallaxScrollView>
      <CustomFooter isBack={false} navigation={props.navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 0,
  },
  subViewContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  angelButton: {
    marginTop: 15,
    width: 30,
    height: 30,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowOffset: { height: 0, width: 0 },
    shadowColor: 'gray',
    shadowOpacity: 0.50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    borderBottomWidth: 1.5,
    borderColor: "#b4b4b4",
    marginTop: 20
  },
  angelImage: {
    width: 15,
    height: 20,
    alignSelf: 'center'
  },
  subTitleText: {
    fontSize: 18,
    color: 'black',
  },
});