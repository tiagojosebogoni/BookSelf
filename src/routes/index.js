import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BookList from '../pages/Book/List';
import BookStore from '../pages/Book/Store';
import Comment from '../pages/Comment/Store';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/book/list" isPrivate component={BookList} />
      <Route path="/book/store" isPrivate component={BookStore} />
      <Route path="/book/:id/comments" isPrivate component={Comment} />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
