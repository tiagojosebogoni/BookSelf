import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { CommentContext } from '../../../context/CommentContext';

import TextArea from '../../../components/TextArea';
import Button from '../../../components/Button';
import { Container } from './styles';

export default function Store() {
  const location = useLocation();

  const [book, setBook] = useState({});
  const [body, setBody] = useState('');
  const context = useContext(CommentContext);

  function handleSalveComment(e) {
    e.preventDefault();

    context.save({ parentId: book.id, body, author: 'Me' });
    setBody('');
  }

  useEffect(() => {
    if (location) {
      const { state } = location;

      setBook(state.book);
    }
  }, []);

  return (
    <Container>
      <form>
        <TextArea
          placeholder="Comment"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <Button type="submit" onClick={handleSalveComment}>
          Save Comment
        </Button>
      </form>
    </Container>
  );
}
