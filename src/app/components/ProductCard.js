import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-5 my-auto">
                  <img src="#" alt="IMAGEM 1"></img>
                  <img src="#" alt="IMAGEM 2"></img>
                  <img src="#" alt="IMAGEM 3"></img>
                  <img src="#" alt="IMAGEM 4"></img>
                </div>
                <div className="col-md-4 my-auto">
                  <h6 className="m-0">NOME PRODUTO</h6>
                  <small className="text-muted">TIPO &#8226; MODELO</small>
                </div>
                <div className="col-md-3 my-auto">
                  <span className="text-muted text-line-through">PRECO ANTIGO</span> 
                  <span className="text-muted"> por </span>
                  PREÇO NOVO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default ProductCard;
