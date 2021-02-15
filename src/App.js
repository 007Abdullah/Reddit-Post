import logo from './logo.svg';
import './App.css';
import { Container, TextField, TextareaAutosize, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react'

function App() {
  const [posts, setposts] = useState({});
  function handelSubmit(e) {
    e.preventDefault();
    console.log(e);
  }



  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="sm">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <form className={classes.root} action="" onSubmit={handelSubmit}>
                  <TextField id="Title" label="Title" value={posts.name} onChange={(e) => { setposts(e.target.value) }} color="secondary" />
                  <br />
                  <br />
                  <TextareaAutosize aria-label="empty textarea" placeholder="Write Text" id="textarea" value={posts.text} onChange={(e) => { setposts(e.target.value) }} />
                  <br />
                  <br />
                  {/* <TextareaAutosize aria-label="minimum height" rowsMin={5} colMin={10} placeholder="Write Text" /> */}
                  <Button variant="contained">POST</Button>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
}

export default App;
