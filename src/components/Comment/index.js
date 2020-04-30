/* eslint-disable react/button-has-type */
import React, { useState, useEffect, useContext } from 'react';
import { FiEdit, FiDelete } from 'react-icons/fi';
import pt from 'date-fns/locale/pt-BR';
import { formatDistance } from 'date-fns';

import Swal from 'sweetalert2';

import Button from '../Button';
import { CommentContext } from '../../context/CommentContext';
import TextArea from '../TextArea';

import {
  Container,
  Dated,
  Body,
  Author,
  Content,
  Header,
  Icons,
} from './styles';

export default function Comment({ comment }) {
  const context = useContext(CommentContext);
  const [date, setDate] = useState('');
  const [body, setBody] = useState('');
  const [editabled, setEditabled] = useState(false);

  useEffect(() => {
    const parsedDate = formatDistance(new Date(), comment.timestamp, {
      addSuffix: true,
      locale: pt,
    });

    setDate(parsedDate);
  }, []);

  function handleEditComment() {
    setBody(comment.body);

    setEditabled(!editabled);
  }

  function handleDeleteComment() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this comment?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        const success = context.deleteComment({ id: comment.id });

        if (success) {
          Swal.fire('Deleted!', 'Your comment has been deleted.', 'success');
        }
      }
    });
  }

  function handleSaveComment() {
    const commentAlter = {
      ...comment,
      body,
    };

    context.save(commentAlter);
    setBody('');

    setEditabled(false);
  }

  return (
    <Container>
      <Content>
        <Header>
          <Author>{comment.author}</Author>
          <Icons>
            <Button onClick={() => handleEditComment()}>
              <FiEdit size={20} color="#fff" />
            </Button>
            <Button onClick={() => handleDeleteComment()} remove>
              <FiDelete size={20} color="#fff" />
            </Button>
          </Icons>
        </Header>
        <Dated>{date}</Dated>
        {editabled ? (
          <>
            <TextArea value={body} onChange={(e) => setBody(e.target.value)} />
            <Button onClick={handleSaveComment}>Save</Button>
          </>
        ) : (
          <Body>{comment.body}</Body>
        )}
      </Content>
    </Container>
  );
}
