import React, { useEffect, useState } from "react";
import API from "../utils/API";
import SavedListItem from "../components/SavedListItem";
import Typography from "@material-ui/core/Typography";

const Saved = () => {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    API.getSavedBooks()
      .then((response) => {
        console.log(response.data);
        setSavedBooks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Typography variant="h6" align="left">
        Saved Books
      </Typography>

      <div>
        <SavedListItem />
        {/* {savedBooks.map((book) => (
          <SavedListItem
      
          />
        ))} */}
      </div>
    </>
  );
};

export default Saved;
