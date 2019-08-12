import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Menu from './Menu';

import {
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation
} from './styles';

const CreditCardContent = ({ translateY, animatedEvent, onHandlerStateChange }) => {
    return (
    <Content>
      <Menu translateY={translateY} />

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Card style={{
          transform: [{
            translateY: translateY.interpolate({
              inputRange: [-350, 0, 380],
              outputRange: [-50, 0, 380],
              extrapolate: 'clamp'
            }),
          }]
        }}>
          <CardHeader>
            <Icon name='attach-money' size={28} color='#666' />
            <Icon name='visibility-off' size={28} color='#666' />
          </CardHeader>

          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 200.125,62</Description>
          </CardContent>

          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida de Fulano de Tal hoje às 13:00h
            </Annotation>
          </CardFooter>
        </Card>
      </PanGestureHandler>
    </Content>
  );
};

export default CreditCardContent;
