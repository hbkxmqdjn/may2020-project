import React, {Component} from 'react';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class ProductTile extends Component {
  constructor(props) {
    super(props)
    // state = {
    //
    // }
  }
  render() {
    return(
      <Container >
        <button>
          <AddIcon />
        </button>
        <img src={"./assets/" + this.props.imageSrc} alt={this.props.alt}/>
        <h6>{this.props.title}</h6>
        <p>${this.props.price}</p>
        <button>
          <ShoppingCartIcon />
          Add to cart
        </button>
      </Container>
    );
  }

}

export default ProductTile
