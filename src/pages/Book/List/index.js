import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { FiCamera, FiDelete, FiEdit } from 'react-icons/fi';

import CommentProvider from '../../../context/CommentContext';

import ListComments from '../../Comment/List';
import Button from '../../../components/Button';

import Comments from '../../Comment/Store';

import api from '../../../api';
import {
  Container,
  Content,
  ContentImage,
  ContentBook,
  ContentDate,
  ContentAux,
  Title,
  Author,
  Buttons,
  Description,
  TitleComment,
  ContentComment,
} from './styles';

export default function List({ history, location }) {
  const [book, setBook] = useState({});

  function handleDelete() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this book?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        const success = api.Book.delete({ id: book.id });

        if (success) {
          Swal.fire('Deleted!', 'Your book has been deleted.', 'success');
        }
      }
    });
  }

  function handleEdit() {
    history.push('/book/store', { book });
  }

  useEffect(() => {
    const { state } = location;

    if (state) {
      const bookParam = state.book;

      if (bookParam) {
        setBook(bookParam);
      }
    }
  }, []);

  return (
    <Container>
      <Content>
        <ContentBook>
          <ContentDate>
            <ContentAux>
              <ContentImage>
                {book.url ? (
                  <img src={book.url} width="250px" alt="Book" />
                ) : (
                  <FiCamera size={100} color="#333" />
                )}
              </ContentImage>
              <ContentBook>
                <Buttons>
                  <Button Icons={FiEdit} onClick={handleEdit}>
                    Edit
                  </Button>
                  <Button remove Icons={FiDelete} onClick={handleDelete}>
                    Delete
                  </Button>
                </Buttons>
                <Title>{book.title}</Title>
                <Author>{book.author} (Author)</Author>
              </ContentBook>
            </ContentAux>
            <Description>{book.description}</Description>
          </ContentDate>
        </ContentBook>
        <ContentComment>
          <TitleComment>Comment</TitleComment>

          <CommentProvider>
            <Comments book={book.id} />
            <ListComments />
          </CommentProvider>
        </ContentComment>
      </Content>
    </Container>
  );
}
