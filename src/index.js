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
  const handleFormInput = (e) => {
    console.log("handle form input");
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleButtonClick = () => {
    alert("handle button click");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handle Submit");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2>Typical Form</h2>
        <input type="text" name="example" onChange={handleFormInput} style={{ margin: "1rem 0" }}></input>
     <button onClick={handleFormSubmit} type="submit">submit</button>
      </form>
      <div>
      <button onClick={handleButtonClick} type="button">click me</button>
      </div>
    </section>
  );
};


const Book = (props) => {
  const { Img, Title, Author } = props;
  const displayTitle =() => {
    console.log(Title)
  }
  return (
    <article className="book">
      <img src={Img} alt={Title} />
      <h2>{Title}</h2>
      <button onClick={displayTitle}>display title</button>
      <h4>{Author}</h4>

      {console.log(props)}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
