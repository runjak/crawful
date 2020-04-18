import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import DeleteIcon from '@material-ui/icons/Delete';

import { setDisplayName, useCurrentUser, signOut } from '../firebase/authentication';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

const SignIn = () => {
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
          if (!name) {
            alert('Please choose a non-empty name.');
          } else {
            setDisplayName(name);
          }
        }}>Sign in!</Button>
      </CardActions>
    </Card >
  );
};

const SignOut = () => {
  const classes = useStyles();
  const currentUser = useCurrentUser();

  if (!currentUser) { return null; }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Sign out of guest account '{currentUser.displayName}'
        </Typography>
        Data associated with this user will be lost afterwards.
      </CardContent>
      <CardActions>
        <Button onClick={signOut}>
          <DeleteIcon />
          Sign out!
        </Button>
      </CardActions>
    </Card >
  );
}

const GuestInfo = () => {
  const currentUser = useCurrentUser();

  if (currentUser && !currentUser.isAnonymous) {
    return null;
  }

  return !currentUser ? (<SignIn />) : (<SignOut />);
};

export default GuestInfo;
