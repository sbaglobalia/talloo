import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Text, FlatList, Dimensions } from "react-native";
import { ScrollableTabView } from '@summerkiflain/react-native-scrollable-tabview'
import { SearchBar } from 'react-native-elements';
import { WIDTH, PROFILE_IMAGE_CONSTANT, HEIGHT, TAB_FOOTER_IMAGE_CONSTANT } from "../../utils/Constant";
import FastImage from 'react-native-fast-image';
import { useNavigation } from "@react-navigation/native";
import ContactProfile from '../contact/ContactProfile'
export default function Contact() {
   
    const allData = [
        {
            id: 1,
            firstname: "Jahanvi",
            lastname: "borse",
            Image: "https://bootdey.com/img/Content/avatar/avatar3.png"
        },
        {
            id: 2,
            firstname: "Om",
            lastname: "Rana",
            Image: "https://bootdey.com/img/Content/avatar/avatar1.png"
        },
        {
            id: 3,
            firstname: "Sumit",
            lastname: "patel",
            Image: "https://bootdey.com/img/Content/avatar/avatar2.png"
        },
        {
            id: 4,
            firstname: "Rima",
            lastname: "patel",
            Image: "https://bootdey.com/img/Content/avatar/avatar3.png"
        },
        {
            id: 5,
            firstname: "Anish",
            lastname: "Rana",
            Image: "https://bootdey.com/img/Content/avatar/avatar1.png"
        },
        {
            id: 6,
            firstname: "Sunita",
            lastname: "patel",
            Image: "https://bootdey.com/img/Content/avatar/avatar2.png"
        },
        {
            id: 7,
            firstname: "palak",
            lastname: "patil",
            Image: "https://bootdey.com/img/Content/avatar/avatar3.png"
        },
        {
            id: 8,
            firstname: "Ritesh",
            lastname: "sahani",
            Image: "https://bootdey.com/img/Content/avatar/avatar1.png"
        },
        {
            id: 9,
            firstname: "Mahavir",
            lastname: "Hingu",
            Image: "https://bootdey.com/img/Content/avatar/avatar2.png"
        },
        {
            id: 10,
            firstname: "Dhama",
            lastname: "chauhan",
            Image: "https://bootdey.com/img/Content/avatar/avatar4.png"
        },
        {
            id: 11,
            firstname: "Dhaval",
            lastname: "jariwala",
            Image: "https://bootdey.com/img/Content/avatar/avatar3.png"
        },
        {
            id: 12,
            firstname: "zenam",
            lastname: "ansari",
            Image: "https://bootdey.com/img/Content/avatar/avatar2.png"
        },
        {
            id: 13,
            firstname: "Mahavir",
            lastname: "Hingu",
            Image: "https://bootdey.com/img/Content/avatar/avatar2.png"
        },
        {
            id: 14,
            firstname: "Dhama",
            lastname: "chauhan",
            Image: "https://bootdey.com/img/Content/avatar/avatar4.png"
        },
        {
            id: 15,
            firstname: "Dhaval",
            lastname: "jariwala",
            Image: "https://bootdey.com/img/Content/avatar/avatar3.png"
        },
        {
            id: 16,
            firstname: "zenam",
            lastname: "ansari",
            Image: "https://bootdey.com/img/Content/avatar/avatar2.png"
        },
        {
            id: 17,
            firstname: "Mahavir",
            lastname: "Hingu",
            Image: "https://bootdey.com/img/Content/avatar/avatar2.png"
        },
        {
            id: 18,
            firstname: "Dhama",
            lastname: "chauhan",
            Image: "https://bootdey.com/img/Content/avatar/avatar4.png"
        },
        {
            id: 19,
            firstname: "Dhaval",
            lastname: "jariwala",
            Image: "https://bootdey.com/img/Content/avatar/avatar3.png"
        },
        {
            id: 20,
            firstname: "zenam",
            lastname: "ansari",
            Image: "https://bootdey.com/img/Content/avatar/avatar2.png"
        },
    ];
 
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const navigation = useNavigation();
    let SCREEN_WIDTH = Dimensions.get('window').width;
    const [dataa, setData] = useState(allData);
    const _renderListView = () => {


        const searchFilterFunction = (text) => {
            setSearch(text)

            if (text) {
                const newData = dataa.filter(function (item) {
                    const itemData = item.firstname
                        ? item.firstname.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
                console.log("newdata", newData)
                setData(newData)
            }
            else {
                setData(allData)
            }
        };

        return (

            <View style={{ marginBottom: HEIGHT * 0.10 }}>
                <SearchBar
                    placeholder="Search Name, Company or Keyword"
                    onChangeText={(text) => searchFilterFunction(text)}
                    // onChangeText={queryText => handleSearch(queryText)}
                    // value={search}
                    inputContainerStyle={{ backgroundColor: '#F0F0F0', margin: WIDTH * 0.04, height: 45, marginTop: 0 }}
                    round={true}
                    inputStyle={{ color: 'black' }}
                    containerStyle={{ backgroundColor: 'white', borderTopColor: 'white', borderBottomColor: 'white', height: 45, marginBottom: 15 }}
                />
                <View>


                    <FlatList style={{ marginTop: 1, height: "94%", width:WIDTH * 1.0 }}
                        data={dataa}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            // console.log("item",item)
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate("ContactProfile")}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ bottom: 0, backgroundColor: 'lightgray', height: 1, width: '100%' }} />
                                        <View style={style.containerView}>
                                            <FastImage
                                                style={{ height: 40, width: 40, borderRadius: 40 / 2 }}
                                                // source={item.Image}
                                                // source={{ uri: item.Image }}
                                                //resizeMode={FastImage.resizeMode.contain}
                                                source={{ uri: item.Image }}
                                            />
                                            <View style={{ marginLeft: 10, flexDirection: 'column' }}>
                                                <Text style={style.titleText} numberOfLines={1}>{item.firstname}</Text>
                                                <Text style={style.companyText} numberOfLines={1}>{item.lastname}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>


                            )
                        }}
                    />


                </View>
            </View>
        );
    }
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

                <View key={1} tabLabel={'All'} style={{}}>
                    <View>
                        {_renderListView()}
                    </View>
                </View>
                <View key={2} tabLabel={'Favorites'} style={{}}>
                    <View>
                        {_renderListView()}
                    </View>
                </View>


                <View key={3} tabLabel={'Near Me'} style={{}}>
                    <View>
                        {_renderListView()}
                    </View>
                </View>

            </ScrollableTabView>

        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#fafafa'
    },
    flatListContainer: {
        marginLeft: 7,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 5
    },
    activityIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    companyText:{
      color:"black"
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
        marginRight: 25
    },
    containerView: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        margin: 10
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
        marginTop: 10
    },
    tabStyle: {},
    scrollStyle: {
        backgroundColor: 'white',
        paddingLeft: 65,
        paddingRight: 65,
        // justifyContent: 'center',
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
    // underlineStyle: {
    //     height: 3,
    //     backgroundColor: 'red',
    //     borderRadius: 3,
    //     width:"34%",
    // },
})