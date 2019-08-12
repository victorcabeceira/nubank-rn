import React from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import CreditCardContent from '../../components/CreditCardContent';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Container } from './styles';

const Main = () => {
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = event => {};

  return (
    <Container>
      <Header translateY={translateY} />
      <CreditCardContent onHandlerStateChange={onHandlerStateChange} animatedEvent={animatedEvent} translateY={translateY} />
      <Tabs translateY={translateY} />
    </Container>
  );
};

export default Main;
