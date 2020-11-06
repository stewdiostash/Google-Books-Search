import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    margin: 60,
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Google Books Search
      </Typography>
      <Typography variant="h5" gutterBottom>
        Search for and save books of interest
      </Typography>
    </div>
  );
};

export default Header;
