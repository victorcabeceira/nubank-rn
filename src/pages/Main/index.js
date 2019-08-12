import React from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import CreditCardContent from '../../components/CreditCardContent';

import { Container } from './styles';

const Main = () => {
  return (
    <Container>
      <Header />
      <CreditCardContent />
      <Tabs />
    </Container>
  );
};

export default Main;
