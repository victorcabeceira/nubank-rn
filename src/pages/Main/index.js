import React from 'react';
import { Animated } from 'react-native';
import { State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import CreditCardContent from '../../components/CreditCardContent';

import { Container } from './styles';

const Main = () => {
  let offset = 0;
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

  const onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;
      let opened = false;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;

        Animated.timing(translateY, {
          toValue: 380,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  };

  return (
    <Container>
      <Header />
      <CreditCardContent onHandlerStateChange={onHandlerStateChange} animatedEvent={animatedEvent} translateY={translateY} />
      <Tabs translateY={translateY} />
    </Container>
  );
};

export default Main;
