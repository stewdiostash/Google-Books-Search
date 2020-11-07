import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  thumb: {
    width: "100%",
    height: "auto",
  },
  titleRow: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const BookListItem = ({
  link,
  image,
  title,
  authors,
  description,
  // handleSaveButton,
}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Paper className={classes.paper}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={3} md={2}>
              <img className={classes.thumb} src={image} alt={title} />
            </Grid>
            <Grid item xs={9} md={10}>
              <Grid container spacing={3} className={classes.titleRow}>
                <Grid item>
                  <Typography variant="h5" gutterBottom>
                    {title}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {authors}
                  </Typography>
                </Grid>
                <Grid item>
                  <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group"
                  >
                    <Button href={link}>View</Button>
                    <Button>Save</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
              <Typography variant="body1" gutterBottom>
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default BookListItem;
