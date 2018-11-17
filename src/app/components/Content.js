import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div className="content mb-3">
      <div className="row">
        <div className="col-md-12 title">
            <h2 className="font-weight-light">TERMO BUSCADO</h2>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-3">
          <div className="border-gold font-weight-light text-uppercase my-4">
            ### Produtos Encontrados
          </div>
        </div>
      </div>
      
    </div>
    );
  }
}
 
export default Content;
