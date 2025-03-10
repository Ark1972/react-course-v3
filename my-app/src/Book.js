import React from "react";

export const Book = ({ img, author, title, rank, displayValue, id }) => {
  return (
    <article className='book'>
      <span className="number">{`#${rank}`}</span>
      <img src={img} alt="Missing" />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button" onClick={() => displayValue(id)}>Display title</button>
    </article>
  );
};
