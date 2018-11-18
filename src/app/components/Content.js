import React from 'react';
import ReactQueryParams from 'react-query-params';

import * as querystring from 'querystring';

import ProductCard from './ProductCard';
import Footer from './Footer';

class Content extends ReactQueryParams {
  constructor(props) {
    super(props);

    this.state = {
      search: null,
      count: 0,
      pagination: {},
      products: [],
    };
  }

  componentWillMount() {
    let query = this.queryParams;
    let qs = querystring.stringify(query);
    qs = Object.keys(query).length > 0 ? '?' + qs : qs;

    fetch('http://localhost:8080/products' + qs)
      .then(response =>  response.json())
      .then(json => {
        this.setState({
          search: null,
          count: json.count,
          pagination: {
            qs: qs.replace(/\?/, '').replace(/&*page=\d+&*/, ''),
            currentPage: json.page,
            totalPages: json.totalPages,
            previous: json.previous,
            next: json.next
          },
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

        <hr/>

        <Footer pagination={this.state.pagination}/>
    </div>
    );
  }
}
 
export default Content;
