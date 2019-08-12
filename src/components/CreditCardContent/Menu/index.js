import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  QRCode,
  Nav,
  NavItems,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles';

// QRCode libs require older rn versions, so I used an image
import nubank_qrcode from '../../../assets/nubank_qrcode.png';

const Menu = () => {
  return (
    <Container>
      <Code>
        <QRCode source={nubank_qrcode} />
      </Code>

      <Nav>
        <NavItems>
          <Icon name='help-outline' size={20} color='#FFF' />
          <NavText>Me ajuda</NavText>
        </NavItems>
        <NavItems>
          <Icon name='person-outline' size={20} color='#FFF' />
          <NavText>Perfil</NavText>
        </NavItems>
        <NavItems>
          <Icon name='credit-card' size={20} color='#FFF' />
          <NavText>Configurar cartão</NavText>
        </NavItems>
        <NavItems>
          <Icon name='smartphone' size={20} color='#FFF' />
          <NavText>Configurações do app</NavText>
        </NavItems>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
};

export default Menu;
