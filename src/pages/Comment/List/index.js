import React, { useContext } from 'react';

import { CommentContext } from '../../../context/CommentContext';
import Comment from '../../../components/Comment';

export default function List() {
  const context = useContext(CommentContext);

  const data = context.comments
    ? context.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))
    : null;

  return <>{data}</>;
}
