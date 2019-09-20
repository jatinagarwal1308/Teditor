import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  menuicon :{
    color: 'white',
  }
});

export default function TemporaryDrawer(path) {
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const icons1 = [<HomeSharpIcon />]
  const icons2 = [<CallIcon />]

  const toggleDrawer = (open) => event => {    
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState(open)
  };

 const handleClick = (event) =>{
   console.log(event.target.value)
 }

  const sideList = () => (
    <div
      className={classes.list} 
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
       {
         path.path === '/'? 
         null :  
         <ListItem button >
         <ListItemIcon>{ <HomeSharpIcon/> }</ListItemIcon>
         <ListItemText primary='Home' />
         </ListItem>
       }

        {['somethingelse'].map((text, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{ icons1[index] }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Contact Us',].map((text, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{ icons2[index] }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}> 
        <MenuIcon className={classes.menuicon}/> 
      </Button>

      <Drawer open={state} onClose={toggleDrawer(false)}>
        {sideList()}
      </Drawer>
    </div>
  );
}