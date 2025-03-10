import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import img1 from './images/book-1.jpg';
import img2 from './images/book-2.jpg';
import img3 from './images/book-3.jpg';

const books = [
    {
      author: 'Jordan Moore',
      title: 'Interesting Facts For Curious Minds',
      img: img1,
      id: 1,
    },
    {
      author: 'James Clear',
      title: 'Atomic Habits',
      img: img2,
      id: 2,
    },
    {
      author: 'Stephen King',
      title: 'Fairy Tale',
      img: img3,
      id: 3,
    },
  ];



function BookList() {
    return (
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id}>
            {book.id === 1 && <p>First book, because id is {book.id}!</p>}
          </Book>;
        })}=
      </section>
    );
  }
  
  const Book = ({img, author, title, children}) => {
    return (
      <article className='book'>
        <img src={img} alt="Missing" />
        <h2>{title}</h2>
        <h4>{author}</h4>
        {children}
      </article>
    );
  };
  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(<BookList />);