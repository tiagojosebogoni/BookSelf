import React from 'react';

import { Container } from './styles';

export default function Button({ Icons, children, ...rest }) {
  return (
    <Container {...rest}>
      {Icons && <Icons size={22} color="#fff" />}
      {children}
    </Container>
  );
}
