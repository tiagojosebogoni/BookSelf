import React from 'react';
import { Container, Label } from './styles';

export default function Input({ label, ...rest }) {
  return (
    <Container>
      <Label>{label}</Label>
      <textarea {...rest} />
    </Container>
  );
}
