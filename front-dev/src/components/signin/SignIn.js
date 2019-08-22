import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [state, setState] = useState({
    login: 'truc',
    password: 'a',
    rememberme: true,
  });

  const onChange = e => {
    const {name, value} = e.currentTarget;
    setState({...state, [name]: value});
  };

  const onRememberMeChange = e => {
    setState({...state, rememberme: e.currentTarget.checked});
  };

  const onSubmit = e => {
    e.preventDefault();

    // VERIFIER LES CHAMPS DU FORMULAIRE
    axios
      .post('/users/signin', state)
      .then(res => {
        if (res.error) {
          console.log(res);
          // AFFICHER L'ERREUR
        }
        // ENREGISTRER DANS REDUX
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            onChange={onChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={state.login}
            id="login"
            label="Login"
            name="login"
            autoComplete="login"
            autoFocus
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={state.password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={onRememberMeChange}
                value="remember"
                checked={state.rememberme}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
