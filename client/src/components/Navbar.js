import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  title: {
    // flexGrow: 1,
    marginRight: theme.spacing(4),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            // noWrap
            className={classes.title}
          >
            Google Books
          </Typography>
          <div>
            <Button href="/" color="inherit">
              Search
            </Button>
            <Button href="/saved" color="inherit">
              Saved
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
