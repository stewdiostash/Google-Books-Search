import React, { useState } from "react";
import API from "../utils/API";
import Searchbar from "../components/Searchbar";
import BookListItem from "../components/BookListItem";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const bookQuery = event.target.value;
    setQuery(bookQuery);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getBooks();
  };

  const getBooks = () => {
    API.getBooks(query)
      .then((res) => {
        console.log(res.data.items);
        setBooks(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(books);
  };

  // function saves book
  // Books.find
  // Filter through

  //Save book function that goes to API books route

  return (
    <>
      <Searchbar
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        query={query}
      />
      <div>
        {books.map((book) => (
          <BookListItem
            key={book.id}
            link={book.selfLink}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            // handleSaveButton={handleSaveButton}
          />
        ))}
      </div>
    </>
  );
};

export default Search;
