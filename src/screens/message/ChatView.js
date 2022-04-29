import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Bubble} from 'react-native-gifted-chat';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import TypingIndicator from './ChatInput';
export default function ChatView() {
  const [messages, setMessages] = useState([]);
  const [typestatus, settypestatus] = useState(false);
  console.log('typestatus', typestatus);
  const navigation = useNavigation();
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const renderSend = () => {
    return (
      <TouchableOpacity style={{marginRight: 5, marginBottom: 5}}>
        <Icon name="arrow-circle-up" size={30} />
      </TouchableOpacity>
    );
  };
  const renderFooter = () => {
    return <TypingIndicator isTyping={true} />;
  };
  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: 'black',
          },
          left: {
            color: 'black',
          },
        }}
        wrapperStyle={{
          right: {
            backgroundColor: '#EFEFF5',
          },
          left: {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#EFEFF5',
          },
        }}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          borderBottomWidth: 1,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{width: '10%', alignItems: 'center'}}
          onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>User</Text>
        </TouchableOpacity>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        parsePatterns={linkStyle => [
          {
            pattern: new RegExp(
              /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
            ),
            style: {color: 'black', textDecorationLine: 'underline'},
            onPress: props => this.openLinkBrowser(props),
          },
          {
            type: 'email',
            style: {color: 'black', textDecorationLine: 'underline'},
          },
          {
            type: 'phone',
            style: {color: 'black', textDecorationLine: 'underline'},
          },
        ]}
        keyboardShouldPersistTaps="never"
        // renderBubble={renderBubble}
        quickReplyStyle={{borderRadius: 2}}
        inverted
        isKeyboardInternallyHandled={true}
        alwaysShowSend={true}
        // renderSend={renderSend}
        renderChatFooter={renderFooter}
      />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  url: {
    color: 'black',
    textDecorationLine: 'underline',
  },
});
