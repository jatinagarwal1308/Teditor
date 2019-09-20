import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'; 
import Navbar from './common/navbar'
import Typography from '@material-ui/core/Typography';
import Forms from "./Forms"

const useStyles = makeStyles(theme => ({

  root2: {
    padding: '11px 11px',
    display: 'inline-block',
    position: 'absolute',
    top: '28%',
    left: '38%',
  },
  root : {
    display: 'flex'
  },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  typo: {
      fontWeight: 'bolder',
      display: 'inline-block',
      padding: '11px 0px'
  },
}))

export default function Login(props) {
  const classes = useStyles();

  return (
    <div>
      <Navbar match={props.match.path}/>


      <Paper className={classes.root2}>
  
        <Typography className={classes.typo} variant="h4" component="h3" >
          Login
        </Typography><br/>
        
        <Forms match={props.match.path} />

      </Paper>
    </div>
  );
}