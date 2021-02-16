import logo from './logo.svg';
import './App.css';
import { Container, TextField, TextareaAutosize, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react'

function App() {
  const [title, setTitle] = useState([{
    title: "",
    post: ""
  }]);
  const [posts, setPosts] = useState({});



  function handelSubmit(e) {
    e.preventDefault();
    setTitle(prev => {
     return prev.concat([{
        title: document.getElementById('title').value,
        post: document.getElementById('textarea').value
      }])
    })
    console.log("CHck karna han E ma kia hn", e.target.value)


  }

  //[name]: value

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
                  <TextField
                    id="title"
                    color="secondary" name="Title" />
                  <br />
                  <br />
                  {JSON.stringify(title)}
                  <TextareaAutosize placeholder="Write Text" id="textarea"
                    name="Post" />
                  <br />
                  <br />
                  {/* <TextareaAutosize aria-label="minimum height" rowsMin={5} colMin={10} placeholder="Write Text" /> */}
                  <Button variant="contained" type="submit">POST</Button>
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
