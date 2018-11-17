import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-md-3 mb-3">
            <select className="form-control" name="show">
              <option value="4">4 produtos por página</option>
              <option value="8" selected>8 produtos por página</option>
              <option value="16">16 produtos por página</option>
              <option value="24">24 produtos por página</option>
            </select>
          </div>

          <div className="col-md-4 my-auto ml-auto">
            <div className="pagination text-center">
              <a href="#" className="text-muted my-auto">
                <i className="far fa-window-minimize fa-rotate-270"></i>
                <i className="fas fa-chevron-left"></i>
              </a>
              <a href="#" className="text-muted mx-3 my-auto">
                <i className="fas fa-chevron-left"></i>
              </a>
              <input type="text" className="form-control d-inline go-to" defaultValue="1"></input>
              <a href="#" className="text-muted my-auto mx-3">2</a>
              <a href="#" className="text-muted my-auto mx-3">3</a>
              <a href="#" className="text-muted my-auto mx-3">4</a>
              <a href="#" className="text-muted my-auto mx-3">5</a>
              <a href="#" className="text-muted my-auto mx-3 my-auto">
                <i className="fas fa-chevron-right"></i>
              </a>
              <a href="#" className="text-muted my-auto">
                <i className="fas fa-chevron-right"></i>
                <i className="far fa-window-minimize fa-rotate-90"></i>
              </a>
            </div>
          </div>              
        </div>
      </footer>
    ); 
  }
}
 
export default Footer;
