import React, { useState, useEffect } from 'react';
import { format, parseISO, formatDistance } from 'date-fns';
import { useHistory } from 'react-router-dom';
import { FiCamera } from 'react-icons/fi';
import pt from 'date-fns/locale/pt-BR';

import {
  Container,
  Content,
  ContentImage,
  ContentBook,
  Title,
  Author,
  DateCriation,
} from './styles';

export default function Book({ book }) {
  const history = useHistory();
  const [date, setDate] = useState();

  function handleClick() {
    history.push('/book/list', { book });
  }

  useEffect(() => {
    const parsedDate = formatDistance(new Date(), new Date(), {
      addSuffix: true,
      locale: pt,
    });

    setDate(parsedDate);
  }, []);

  return (
    <Container onClick={() => handleClick(book)}>
      <Content>
        <ContentImage>
          {book.url ? (
            <img src={book.url} height={95} alt="Book" />
          ) : (
            <FiCamera size={30} color="#333" />
          )}
        </ContentImage>
        <ContentBook>
          <Title>{book.title}</Title>
          <Author>por {book.author} (Autor)</Author>
          <DateCriation>{date}</DateCriation>
        </ContentBook>
      </Content>
    </Container>
  );
}
