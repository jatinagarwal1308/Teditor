import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderBottom: 'solid 5px white',
    borderTopLeftRadius: 5 ,
    borderTopRightRadius: 5
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    padding: '0px',
    textTransform: 'none',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
      borderBottom: '5px',
    },
  },
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#039be5',
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="Javascript"/>
          <StyledTab label="Python" />
          <StyledTab label="Java" />
        </StyledTabs>
    </Paper>
  );
}