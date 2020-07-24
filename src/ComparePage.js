import React from 'react';
import './ComparePage.css';
import ProductTile from './components/ProductTile';

class ComparePage extends React.Component {
  constructor(props) {
    super(props)
     this.state = {
       data: [],
       isFetching: true
     }
  }
   componentDidMount() {
     fetch('https://c73803c8-75ca-41b5-885b-3a733bf5738a.mock.pstmn.io/compare-products')
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data,
          isFetching: false
        })
      });

   }
  render() {
    if(this.state.isFetching) {
      return(
        <div className="main">
          <h1>Product Comparison Layout & Effect</h1>
          <p>Loading</p>

        </div>
      );
    } else {
      return (
        <div className="main">
          <h1>Product Comparison Layout & Effect</h1>
          <p>Success</p>
          {this.state.data.map(item => (
            <ProductTile
              imageSrc= {item.imageSrc}
              alt= {item.alt}
              title= {item.title}
              price= {item.price}/>
          ))}

        </div>
      );
    }

  }
}

export default ComparePage;
