import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import Results from "../components/Results";
import API from "../utils/API";

const Search = () => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const bookQuery = event.target.value;
    setQuery(bookQuery);
  };

  const getBooks = () => {
    API.getBooks(query)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    getBooks();
  };

  // function that does book save
  // Books.find
  // Filter through

  //Save book function that goes to API books route

  return (
    <div>
      <Searchbar
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        query={query}
      />
      <Results />
    </div>
  );
};

export default Search;
