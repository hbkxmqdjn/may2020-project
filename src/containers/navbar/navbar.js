import React from 'react'
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import MaximizeIcon from '@material-ui/icons/Maximize';
//import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    position:'fixed',
    backgroundColor: '#131415',
    zIndex:'100',
    textAlign:"center",
    bottom:0,
    left:0,
    top:'auto',
    width:'100vw',
    height:'80px',
  },
  button:{  
    color:'rgba(255, 255, 255, 0.7)',
    fontSize:'20px',
    '&:hover': {
        cursor: 'pointer',
        color:'#5c5edc',
     },
  },
  
  cart:{
    color:'rgba(255, 255, 255, 0.7)',
  }
});
export default function Navbar(){
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

        return (     
            <div>    
                <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}>
                    <BottomNavigationAction label="All" value="all" icon={<MaximizeIcon />} className={classes.button}/>
                    <BottomNavigationAction label="Jackets" value="jackets"  icon={<MaximizeIcon />} className={classes.button}/>
                    <BottomNavigationAction label="Shirts" value="shirts"  icon={<MaximizeIcon />} className={classes.button}/>
                    <BottomNavigationAction label="Dresses" value="dresses"  icon={<MaximizeIcon />} className={classes.button}/>
                    <BottomNavigationAction label="Trousers" value="trousers"  icon={<MaximizeIcon />} className={classes.button}/>
                    <BottomNavigationAction label="Shoes" value="shoes"  icon={<MaximizeIcon />} className={classes.button}/>
                    <BottomNavigationAction value="cart"  icon={<LocalGroceryStoreIcon />} className={classes.cart}/>
                </BottomNavigation>
            </div>
        )
    
}