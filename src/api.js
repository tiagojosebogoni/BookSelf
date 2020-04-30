import { uuid } from 'uuidv4';

const bookData = [
  {
    id: 'ff234412',
    title: 'Fullstack React: The Complete Guide to ReactJS and Friends',
    author: 'Anthony Accomazzo',
    description:
      'top wasting your time learning React with incomplete and confusing tutorials. There are so many incorrect, confusing, and out-of-date blog articles One tutorial says one thing and another says something completely different.',
    url: 'https://covers.openlibrary.org/b/id/8513006.jpg',
    category: 'currentlyReading',
    timestamp: Date.now(),
    deleted: false,
  },
  {
    id: 'fdfvfdaf',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description:
      'In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.',
    url:
      'https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg',
    category: 'currentlyReading',
    timestamp: Date.now(),
    deleted: false,
  },
];

const Book = {
  update({ id, title, author, description, url, category }) {
    const book = this.findOne(id);

    book.title = title || '';
    book.author = author || '';
    book.description = description || '';
    book.url = url || '';
    book.category = category || '';

    this.save(book);
  },

  findOne(id) {
    const books = JSON.parse(localStorage.getItem('@TJB/books'));
    const book = books.find((b) => b.id === id);

    return book;
  },

  findAll(title, order = '') {
    const hasbooks = localStorage.getItem('@TJB/books');

    if (!hasbooks) {
      localStorage.setItem('@TJB/books', JSON.stringify(bookData));
    }
    const allBooks = JSON.parse(localStorage.getItem('@TJB/books'));

    let booksFiltered = allBooks;

    if (title) {
      booksFiltered = allBooks.filter(
        (book) => book.title.toUpperCase().indexOf(title.toUpperCase()) !== -1
      );
    }
    if (order === 'AZ') {
      booksFiltered = booksFiltered.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (order === 'ZA') {
      booksFiltered = booksFiltered.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    } else if (order === 'DATE') {
      booksFiltered = booksFiltered.sort((a, b) => b.timestamp - a.timestamp);
    }

    return booksFiltered;
  },

  save({
    id,
    title,
    author,
    description,
    url,
    category,
    timestamp = new Date(),
    deleted = false,
  }) {
    let books = [];
    const oldBooks = this.findAll();
    let idBook = '';

    if (!oldBooks) {
      idBook = uuid();
    } else {
      const insert = id === '';

      if (insert) {
        idBook = uuid();
        books = this.findAll();
      } else {
        idBook = id;
        books = oldBooks.filter((b) => {
          return b.id !== id;
        });
      }
    }

    books.push({
      id: idBook,
      title,
      author,
      description,
      url,
      category,
      timestamp,
      deleted,
    });

    localStorage.setItem('@TJB/books', JSON.stringify(books));

    return {
      id,
      title,
      author,
      description,
      url,
      category,
      timestamp,
      deleted,
    };
  },

  delete({ id }) {
    const oldBooks = this.findAll();

    const books = oldBooks.filter((book) => book.id !== id);

    localStorage.setItem('@TJB/books', JSON.stringify(books));
    return true;
  },
};

const Comment = {
  findOne(id) {
    const comments = JSON.parse(localStorage.getItem('@TJB/comments'));
    const comment = comments.find((b) => b.id === id);

    return comment;
  },

  findAll() {
    const comments = JSON.parse(localStorage.getItem('@TJB/comments')) || [];

    if (comments) {
      comments.sort();
      comments.reverse();
    }

    return comments;
  },

  save({
    id,
    parentId,
    timestamp = Date.now(),
    body,
    author,
    deleted = false,
  }) {
    let oldComments = [];
    let comments = [];
    let idComment = '';
    const insert = id !== '';

    oldComments = this.findAll() || [];
    if (insert) {
      idComment = uuid();
      comments = oldComments;
    } else {
      idComment = id;
      comments = oldComments.filter((comment) => comment !== id);
    }

    comments.push({
      id: idComment,
      parentId,
      timestamp,
      body,
      author,
      deleted,
    });

    localStorage.setItem('@TJB/comments', JSON.stringify(comments));
  },

  delete({ id }) {
    const oldComments = this.findAll();
    const comments = oldComments.filter((comment) => comment.id !== id);

    localStorage.setItem('@TJB/comments', JSON.stringify(comments));
    return true;
  },
};

const CATEGORIES = [
  { category: 'withoutCategory', label: 'Without category' },
  { category: 'currentlyReading', label: 'Reading' },
  { category: 'wantToRead', label: 'Want to read' },
  { category: 'read', label: 'Read' },
];

const orderBook = [
  { value: 'Az', label: 'A-z | Alphabetical' },
  { value: 'Za', label: 'Z-A | Alphabetical' },
  { value: 'Date', label: 'Creation date' },
];

export default { CATEGORIES, bookData, Book, orderBook, Comment };
