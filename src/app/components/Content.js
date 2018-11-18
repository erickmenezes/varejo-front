import React, { Component } from 'react';

import ProductCard from './ProductCard';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: null,
      count: 0,
      products: [],
    };
  }

  componentWillMount() {
    fetch('http://localhost:8080/products')
      .then(response =>  response.json())
      .then(json => {
        this.setState({
          search: null,
          count: json.count,
          products: json.results 
        });
      })
      .catch((err) => {
        console.log('An error occured');
      });
  }

  renderSearchedField() {
    if (this.state.search) {
      return (
        <div className="row">
          <div className="col-md-12 title">
            <h2 className="font-weight-light">{this.state.search}</h2>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="content mb-3">
        {this.renderSearchedField()}
        
        <div className="row">
          <div className="col-md-3">
            <div className="border-gold font-weight-light text-center text-uppercase my-4">
              {this.state.count} Produtos Encontrados
            </div>
          </div>
        </div>

      {this.state.products.map((product, index) => (
        <div className="row" key={index}>
          <div className="col-md-12">
            <ProductCard key={index} product={product}/>
          </div>
        </div>
      ))}
    </div>
    );
  }
}
 
export default Content;
