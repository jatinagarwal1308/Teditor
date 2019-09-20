import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    fontWeight: 'bold',
  },
  input: {
    display: 'none',
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" color="primary" className={classes.button}>
        Login
      </Button>
      <Button variant="outlined" href="/createAccount" className={classes.button}>
      Create an account.
      </Button>
    </div>
  );
}