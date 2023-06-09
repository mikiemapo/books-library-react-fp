import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    Author: "Gregory E. Lang, Susanna Leonard Hill",
    Title: "Why a Daughter Needs a Dad",
    Img: "./images/book-1.jpg",
  },

  {
    Author: "by Kahran Bethencourt, Regis Bethencourt",
    Title: "CROWNED: Magical Folk and Fairy Tales from the Diaspora",
    Img: "./images/book-2.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </section>
  );
};

const EventExamples = () => {
  const handleForm = () => {
    console.log("handel form input");
  };

  const handleButtonClick = () => {
    alert("handle button click");
  };

  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input type="text" name="example" onChange={handleForm} style={{ margin: "1rem 0" }}></input>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};

const Book = (props) => {
  const { Img, Title, Author } = props;
  return (
    <article className="book">
      <img src={Img} alt={Title} />
      <h2>{Title}</h2>
      <h4>{Author}</h4>

      {console.log(props)}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
