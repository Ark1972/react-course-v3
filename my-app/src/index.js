import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import { Book } from './Book';

function BookList() {
  const someValue = 'ShakeAndSing'

  const displayTitle = (id) => {
    console.log(id);
    const book = books.find((book) => book.id === id);
    console.log(book.title);
  };

  return (
    <>
      <h1>Amazon best sellers</h1>
      <section className='booklist'>  
        {books.sort((a, b) => a.rank - b.rank).map((book) => {
          return <Book {...book} key={book.id} displayValue={displayTitle} />
        })}
      </section>
    </>
  );
  }

  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(<BookList />);