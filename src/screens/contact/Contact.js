import * as React from 'react';
import { Text, View } from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar,
  SceneComponent,
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import { SafeAreaView } from 'react-native-safe-area-context';



// const Tab = createMaterialTopTabNavigator();

export default function Contact() {
  return (

    <View>
      <Text tabLabel="Tab #2 word word">favorite</Text>
      <Text tabLabel="Tab #3 word word word">project</Text>
      <Text tabLabel="Tab #4 word word word word">favorite</Text>
    </View>

  );
}
