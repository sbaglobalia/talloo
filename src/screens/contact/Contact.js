import * as React from 'react';
import {Text, View} from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar,
  SceneComponent,
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import {SafeAreaView} from 'react-native-safe-area-context';

function HomeScreen() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </SafeAreaView>
  );
}

// const Tab = createMaterialTopTabNavigator();

export default function Contact() {
  return (
    <ScrollableTabView
      style={{marginTop: 20}}
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar />}>
      <Text tabLabel="Tab #1">My</Text>
      <Text tabLabel="Tab #2 word word">favorite</Text>
      <Text tabLabel="Tab #3 word word word">project</Text>
      <Text tabLabel="Tab #4 word word word word">favorite</Text>
      <Text tabLabel="Tab #5">project</Text>
    </ScrollableTabView>
  );
}
