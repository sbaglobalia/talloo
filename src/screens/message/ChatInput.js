import React, {useState, Component, useEffect} from 'react';
import {Animated, View} from 'react-native';
import {TypingAnimation} from 'react-native-typing-animation';

// interface Props {
//   isTyping: boolean
// }
export default ChatInput = props => {
  const [yCoords, setyCoords] = useState(new Animated.Value(200));
  const [heightScale, setheightScale] = useState(new Animated.Value(200));
  const [marginScale, setmarginScale] = useState(new Animated.Value(200));
  const [isTyping, setisTyping] = useState(props.isTyping);

  useEffect(() => {
    if (props.isTyping) {
      slideIn();
      console.log('call');
    } else {
      slideOut();
    }
  }, [isTyping]);

  slideIn = () => {
    console.log('call==>');
    Animated.parallel([
      Animated.spring(yCoords, {
        toValue: 0,
      }),
      Animated.timing(heightScale, {
        toValue: 35,
        duration: 250,
      }),
      Animated.timing(marginScale, {
        toValue: 8,
        duration: 250,
      }),
    ]).start();
  };

  slideOut = () => {
    Animated.parallel([
      Animated.spring(yCoords, {
        toValue: 200,
      }),
      Animated.timing(heightScale, {
        toValue: 0,
        duration: 250,
      }),
      Animated.timing(marginScale, {
        toValue: 0,
        duration: 250,
      }),
    ]).start();
  };

  return props.isTyping ? (
    <Animated.View
      style={[
        {
          transform: [
            {
              translateY: yCoords,
            },
          ],
          height: heightScale,
          marginLeft: 8,
          marginBottom: marginScale,
          width: 45,
          borderRadius: 15,
          backgroundColor: '#EFEFF5',
        },
      ]}>
      <TypingAnimation
        style={{marginLeft: 6, marginTop: 7.2}}
        dotRadius={4}
        dotMargin={5.5}
        dotColor={'black'}
      />
    </Animated.View>
  ) : null;
};
