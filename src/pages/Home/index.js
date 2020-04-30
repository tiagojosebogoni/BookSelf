import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

import Book from '../../components/Book';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../api';

import {
  Container,
  Header,
  Content,
  ContentBook,
  BookList,
  BookItem,
} from './styles';

export default function Home() {
  const [books, setBooks] = useState([]);
  const [booksWihoutCategory, setBooksWihoutCategory] = useState([]);
  const [booksRead, setBooksRead] = useState([]);
  const [booksReading, setBooksReading] = useState([]);
  const [booksWantToRead, setBooksWantToRead] = useState([]);
  const [findBook, setFindBook] = useState('');
  const [order, setOrder] = useState('');

  const history = useHistory();

  function loadBooks({ title }) {
    const allBooks = api.Book.findAll(title, order);

    setBooks(allBooks);
  }

  function newBook() {
    history.push('/book/store');
  }

  function handleChangeOrder({ e, value }) {
    e.preventDefault();

    setOrder(value);

    loadBooks({ title: findBook });
  }

  useEffect(() => {
    setBooksRead(books.filter((book) => book.category === 'read'));

    setBooksReading(
      books.filter((book) => book.category === 'currentlyReading')
    );

    setBooksWantToRead(books.filter((book) => book.category === 'wantToRead'));

    setBooksWihoutCategory(
      books.filter((book) => book.category === 'withoutCategory')
    );
  }, [books]);

  useEffect(() => {
    loadBooks({ title: findBook });
  }, []);

  useEffect(() => {
    loadBooks({ title: findBook });
  }, [findBook, order]);

  return (
    <Container>
      <Content>
        <Header>
          <Button onClick={newBook}>Add Book</Button>
          <Input
            placeholder="Find book"
            value={findBook}
            onChange={(e) => setFindBook(e.target.value)}
          />
          <>
            <h3>ORDER</h3>
            <Button
              style={{
                width: '100px',
                background: '#fff',
                border: '1px solid #999',
                color: '#999',
              }}
              onClick={(e) => handleChangeOrder({ e, value: 'AZ' })}
            >
              <FiArrowDown size={20} color="#999" />
              AZ
            </Button>
            <Button
              style={{
                width: '100px',
                background: '#fff',
                border: '1px solid #999',
                color: '#999',
              }}
              onClick={(e) => handleChangeOrder({ e, value: 'ZA' })}
            >
              <FiArrowUp size={20} color="#999" />
              ZA
            </Button>
            <Button
              style={{
                width: '100px',
                background: '#fff',
                border: '1px solid #999',
                color: '#999',
              }}
              onClick={(e) => handleChangeOrder({ e, value: 'DATE' })}
            >
              DATE
            </Button>
          </>
        </Header>
        <>
          <ContentBook>
            {booksWihoutCategory.length > 0 ? (
              <>
                <h1>Without category</h1>
                <BookList>
                  {booksWihoutCategory.map((book) => (
                    <BookItem key={book.id}>
                      <Book book={book} />
                    </BookItem>
                  ))}
                </BookList>
              </>
            ) : null}
          </ContentBook>
          <ContentBook>
            {booksReading.length > 0 ? (
              <>
                <h1>Reading</h1>
                <BookList>
                  {booksReading.map((book) => (
                    <BookItem key={book.id}>
                      <Book book={book} />
                    </BookItem>
                  ))}
                </BookList>
              </>
            ) : null}
          </ContentBook>
          <ContentBook>
            {booksWantToRead.length > 0 ? (
              <>
                <h1>Want to read</h1>
                <BookList>
                  {booksWantToRead.map((book) => (
                    <BookItem key={book.id}>
                      <Book book={book} />
                    </BookItem>
                  ))}
                </BookList>
              </>
            ) : null}
          </ContentBook>
          <ContentBook>
            {booksRead.length > 0 ? (
              <>
                <h1>Read</h1>
                <BookList>
                  {booksRead.map((book) => (
                    <BookItem key={book.id}>
                      <Book book={book} />
                    </BookItem>
                  ))}
                </BookList>
              </>
            ) : null}
          </ContentBook>
        </>
      </Content>
    </Container>
  );
}
