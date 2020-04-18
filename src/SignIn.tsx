import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

import { useCurrentUser, setDisplayName   } from './firebase/authentication';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const GuestSignIn = () => {
  const classes = useStyles();
  const [name, setName] = useState<string>('');

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Sign in as guest
        </Typography>
        <Input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </CardContent>
    <CardActions>
      <Button onClick={() => {
        if(!name) {
          alert('Please choose a non-empty name.');
        }else{
          setDisplayName(name);
        }
      }}>Sign in!</Button>
    </CardActions>
    </Card >
  );
};

const SignIn = () => {
  const currentUser = useCurrentUser();

  if (currentUser) {
    return (<h2>Already signed in.</h2>);
  }

  return (
    <div>
      <h2>Hello please sign in!</h2>
      <GuestSignIn />
    </div>
  );
};

export default SignIn;
