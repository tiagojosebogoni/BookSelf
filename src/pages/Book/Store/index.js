import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { FiCamera } from 'react-icons/fi';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';
import Category from '../../../components/Category';

import api from '../../../api';
import {
  Container,
  Form,
  Inputs,
  Content,
  ContentImage,
  Categories,
} from './styles';

export default function List({ location }) {
  const history = useHistory();

  const [categories, setCategories] = useState(api.CATEGORIES);
  const [id, setid] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('withoutCategory');

  useEffect(() => {
    const { state } = location;

    if (state) {
      const { book } = state;
      if (book) {
        setid(book.id);
        setTitle(book.title);
        setUrl(book.url);
        setAuthor(book.author);
        setDescription(book.description);
        setCategory(book.category);
      }
    }
  }, []);

  useEffect(() => {
    console.log(category);
  }, [category]);
  function handleSave(e) {
    e.preventDefault();

    api.Book.save({ id, url, title, author, description, category });
    history.push('/');
  }

  return (
    <Container>
      <Form>
        <Content>
          <ContentImage>
            {url ? (
              <img src={url} width="250px" alt="Book" />
            ) : (
              <FiCamera size={100} color="#333" />
            )}
          </ContentImage>
          <Inputs>
            <Input
              label="URL image"
              placeholder="URL imagem"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Input
              label="Title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              label="Author"
              placeholder="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Inputs>
        </Content>

        <TextArea
          placeholder="Description book"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Categories>
          {categories
            .filter((c) => c.category !== 'withoutCategory')
            .map((cat) => (
              <Category
                key={cat.label}
                onClick={(e) => {
                  e.preventDefault();
                  setCategory(cat.category);
                }}
                label={cat.label}
                selected={cat.category === category}
              />
            ))}
        </Categories>
        <Button
          style={{ marginTop: '20px' }}
          onClick={handleSave}
          type="submit"
        >
          Save
        </Button>
      </Form>
    </Container>
  );
}
