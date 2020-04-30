import React from 'react';

import { FiBook } from 'react-icons/fi';
import { Container } from './styles';

export default function Category({ label, selected, ...rest }) {
  return (
    <Container {...rest} selected={selected}>
      <FiBook size={30} color="#fff" />
      <h1 style={{ color: '#fff' }}>{label}</h1>
    </Container>
  );
}
