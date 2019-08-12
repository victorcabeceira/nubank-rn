import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

const CreditCardContent = () => {
  return (
    <Content>
      <Card>
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
    </Content>
  );
};

export default CreditCardContent;
