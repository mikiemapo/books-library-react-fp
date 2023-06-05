import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstBook ={
Author : 'Gregory E. Lang, Susanna Leonard Hill',
Title : 'Why a Daughter Needs a Dad',
Img : './images/book-1.jpg'
}

const secondBook ={
  Author : 'by Kahran Bethencourt, Regis Bethencourt',
  Title : 'CROWNED: Magical Folk and Fairy Tales from the Diaspora',
  Img : './images/book-2.jpg'
  }
  


const BookList = () => {
  return (
    <section className="booklist">
    <Book Author={firstBook.Author} Img ={firstBook.Img} Title={firstBook.Title}/>
    <Book Author={secondBook.Author} Img ={secondBook.Img} Title={secondBook.Title}/>
    <Book Author={firstBook.Author} Img ={firstBook.Img} Title={firstBook.Title}/>
    <Book Author={secondBook.Author} Img ={secondBook.Img} Title={secondBook.Title}/>
    </section>
  );
};

const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.Img} alt={props.Title} />
      <h2>{props.Title}</h2>
      <h4>{props.Author}</h4>
      {console.log(props)}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
