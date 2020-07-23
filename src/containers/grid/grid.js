import React from 'react'
import Navbar from '../navbar/navbar'
import TitlebarGridList from '../grid/gridList'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      overflow: 'hidden',
      backgroundColor: '#191a1b',
    },
    title:{
        textAlign:'center',
        margin:'auto',
        color:'rgba(255, 255, 255, 0.8)',
        marginTop:'50px',
        fontFamily: "Avenir, 'Helvetica Neue', 'Lato', 'Segoe UI', Helvetica, Arial, sans-serif",
    },
    subtitle:{
        textAlign:'center',
        margin:'auto',
        color:'rgba(255, 255, 255, 0.2)',
        marginTop:'10px',
        marginBottom:'50px',
        fontFamily: "Avenir, 'Helvetica Neue', 'Lato', 'Segoe UI', Helvetica, Arial, sans-serif",
    },
  }));
export default function Grid() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <h5 className={classes.title}>Filterable Product Grid</h5>
                <h6 className={classes.subtitle}>By SSI-team1</h6>
            </div>
            <TitlebarGridList/>
            <Navbar/>
        </div>
    )
    
}