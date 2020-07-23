import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
//import tileData from './tileData';
import image from '../../images/shirt.png';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#191a1b',
    marginBottom:'100px',
    margin:'auto',
  },
  gridList: {
    width:'1200px', 
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)', 
  },
  title:{
    color:'rgba(255, 255, 255, 0.8)',
    fontWeight:'bold',
    fontFamily: "Avenir, 'Helvetica Neue', 'Lato', 'Segoe UI', Helvetica, Arial, sans-serif",
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    borderRadius:'10px',  
  },
  icon: {
    color:'rgba(255, 255, 255, 0.7)',
  },
  price:{
    color:'rgba(255, 255, 255, 0.5)',
    fontWeight:'bold',
    fontFamily: "Avenir, 'Helvetica Neue', 'Lato', 'Segoe UI', Helvetica, Arial, sans-serif",
  },
}));

  const tileData = [
    {
      img: image,
      title: 'Shirt',
      price: '$99',
      featured: true,
    },
    {
      img: image,
      title: 'Shirt',
      price: '$99',
      featured: true,
    },
    {
      img: image,
      title: 'Shirt',
      price: '$99',
    },
    {
      img: image,
      title: 'Shirt',
      price: '$99',
    },
    {
      img: image,
      title: 'Shirt',
      price: '$99',
    },
    {
      img: image,
      title: 'Shirt',
      price: '$99',
      
    },
    {
      img: image,
      title: 'Shirt',
      price: '$99',
      featured: true,
    },
    {
      img: image,
      title: 'Shirt',
      price: '$99',
      featured: true,
    },
    
  ];
 
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={270} spacing={10} className={classes.gridList} cols={4}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={<span className={classes.title}> {tile.title}</span>}
              subtitle={<span className={classes.price}>price: {tile.price}</span>}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label={`add ${tile.title} to cart`} className={classes.icon}>                   
                   <LocalGroceryStoreIcon />         
                </IconButton>
                
              }
              className={classes.titleBar}
            />
            
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
