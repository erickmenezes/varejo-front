import React, { Component } from 'react';

class ProductCard extends Component {
  formatPrice(price) {
    return 'R$' + price.toFixed(2).replace(/\./,',').replace(/\d(?=(\d{3})+,)/g, '$&.');
  }

  render() {
    const product = this.props.product;

    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-5 my-auto">
            {product.images.map((image, index) => (
              <img className="img-product img-fluid" key={index} src={image.path} alt='Imagem do produto'></img>
            ))}
            </div>
            <div className="col-md-4 my-auto">
              <h6 className="m-0">{product.name}</h6>
              <small className="text-muted">{product.type} &#8226; {product.size}</small>
            </div>
            <div className="col-md-3 my-auto">
              <span className="text-muted text-line-through">{this.formatPrice(product.oldPrice)}</span> 
              <span className="text-muted"> por </span>
              {this.formatPrice(product.price)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default ProductCard;
