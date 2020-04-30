import React, { useState, createContext } from 'react';
import api from '../api';

export const CommentContext = createContext();

const Comments = ({ children }) => {
  const [comments, setComments] = useState(api.Comment.findAll());

  const save = ({ parentId, body, author }) => {
    api.Comment.save({ parentId, body, author });

    setComments(api.Comment.findAll());
  };

  const deleteComment = ({ id }) => {
    api.Comment.delete({ id });

    const oldComments = comments.filter((comment) => comment.id !== id);
    setComments(oldComments);
  };

  return (
    <CommentContext.Provider value={{ comments, save, deleteComment }}>
      {children}
    </CommentContext.Provider>
  );
};

export default Comments;
