import React from 'react';

import { Container, Label } from './styles';

export default function Input({ label, ...rest }) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <input {...rest} />
    </Container>
  );
}
