import React, { useState } from "react";
import API from "../utils/API";
import Searchbar from "../components/Searchbar";
import SearchedListItem from "../components/SearchedListItem";
import Typography from "@material-ui/core/Typography";

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
  };

  const handleSaveBook = (event) => {
    API.postBook(event.target.value)
      .then((res) => {
        console.log("Book saved");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Searchbar
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        query={query}
      />
      <Typography variant="h6" align="left">
        Search Results
      </Typography>

      <div>
        {books.map((book) => (
          <SearchedListItem
            key={book.id}
            link={book.volumeInfo.canonicalVolumeLink}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            description={book.volumeInfo.description}
            image={book.volumeInfo.imageLinks.thumbnail}
            handleSaveBook={handleSaveBook}
          />
        ))}
      </div>
    </>
  );
};

export default Search;
