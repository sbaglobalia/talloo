import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Pressable,
} from 'react-native';

const MyTabBar = ({navigation}) => {
  const route = ['contact', 'route', 'Team', 'Settings', 'Profile'];
  const route1 = [
    {
      title: 'modelData',
      nav: 'AddEvent',
      Key: 'Team',
      image: require('../../assets/FooterTab/FloatFooter/ic_calendar.png'),
    },
    {
      title: 'modelData',
      nav: 'NewMessage',
      Key: 'Team',
      image: require('../../assets/MsgEvent/commentsSolid.png'),
    },
    {
      title: 'modelData',
      nav: 'NewReferral',
      Key: 'Team',
      image: require('../../assets/MsgEvent/dollarSignSolid.png'),
    },
    {
      title: 'modelData',
      nav: 'ShareTalloo',
      Key: 'Team',
      image: require('../../assets/FooterTab/ic_share.png'),
    },

    {
      title: 'Events',
      nav: 'Groups',
      Key: 'Settings',
      image: require('../../assets/MsgEvent/usersSolid.png'),
    },
    {
      title: 'Events',
      nav: 'Events',
      Key: 'Settings',
      image: require('../../assets/MsgEvent/calendarSolid.png'),
    },
    {
      title: 'Chat',
      nav: 'Referrals',
      Key: 'route',
      image: require('../../assets/MsgEvent/dollarSignSolid.png'),
    },
    {
      title: 'Chat',
      nav: 'Message',
      Key: 'route',
      image: require('../../assets/MsgEvent/commentSolid.png'),
    },
  ];
  const [activeIndex, setActiveindex] = useState('contact');
  const [modalVisible, setModalVisible] = useState(false);
  const [key, setKey] = useState('');

  console.log('key', key);
  const navigationdata = item => {
    setActiveindex(item);
    item == 'Team' || item == 'Settings' || item == 'route'
      ? setModalVisible(true)
      : null;
    setKey(item);
    console.log('item===>', item);
    if (item == 'contact') {
      navigation.navigate(item);
    } else if (item == 'Profile') {
      navigation.navigate(item);
    }
  };
  return (
    <View style={{height:0}}>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          //  style={{backgroundColor:"pink"}}
          //  presentationStyle={"none"}
          // containerStyle={{height:200,marginBottom:150,backgroundColor:"pink"}}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={{backgroundColor: 'transparent', flex: 1}}>
            <Pressable
              style={styles.centeredView}
              onPress={() => setModalVisible(!modalVisible)}>
              <View style={styles.modalView}>
                {route1.map(item =>
                  item.Key == key ? (
                    <TouchableOpacity
                      style={{flexDirection: 'row', padding: '5%'}}
                      onPress={() => {
                        navigation.navigate(item.nav),
                          setModalVisible(!modalVisible);
                      }}>
                      <View style={{width: '20%', justifyContent: 'center'}}>
                        <Image
                          style={{
                            resizeMode: 'contain',
                            height: 25,
                            width: 25,
                            alignSelf: 'center',
                          }}
                          source={item.image}
                        />
                      </View>
                      <View style={{width: '80%', justifyContent: 'center'}}>
                        <Text
                          style={{
                            fontSize: 18,
                            color: item.nav == 'ShareTalloo' ? 'red' : 'black',
                          }}>
                          {item.nav}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : null,
                )}
              </View>
            </Pressable>
          </View>
        </Modal>
      </View>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}></Pressable>

      <View
        style={{
          height: 70,
          backgroundColor: 'white',
          borderRadius: 23,
          marginLeft: 30,
          marginRight: 30,
          flexDirection: 'row',
          width: '80%',
          alignSelf: 'center',
          bottom: '40%',
          shadowOpacity: 0.37,
          shadowRadius: 7.49,
          shadowOffset: {
            height: 0,
            width: 0,
          },
          elevation: 9,
        }}>
        {route.map(item => {
          let image = '';

          if (item == 'contact') {
            if (activeIndex == item) {
              image = require('../../assets/MsgEvent/userSolidModRed.png');
            } else {
              image = require('../../assets/MsgEvent/userSolidMod.png');
            }
          } else if (item == 'route') {
            if (activeIndex == item) {
              image = require('../../assets/MsgEvent/commentsSolidRed.png');
            } else {
              image = require('../../assets/MsgEvent/commentsSolid.png');
            }
          } else if (item == 'Team') {
            if (activeIndex == item) {
              image = require('../../assets/MsgEvent/plusSolidRed.png');
            } else {
              image = require('../../assets/MsgEvent/plusSolid.png');
            }
          } else if (item == 'Settings') {
            if (activeIndex == item) {
              image = require('../../assets/MsgEvent/calendarSolidRed.png');
            } else {
              image = require('../../assets/MsgEvent/calendarSolid.png');
            }
          } else if (item == 'Profile') {
            if (activeIndex == item) {
              image = require('../../assets/user.png');
            } else {
              image = require('../../assets/user.png');
            }
          }
          return (
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '20%',
              }}
              onPress={() => navigationdata(item)}>
              <Image
                source={image}
                style={{height: 25, width: 25}}
                resizeMode={route === 'Settings' ? 'cover' : 'contain'}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      </View>
   );
 };
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    // backgroundColor:"pink",
  },
  modalView: {
    margin: '2%',
    // height: '38%',
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 20,
    position: 'absolute',
    bottom: '20%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 5,
    elevation: 2,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default MyTabBar;