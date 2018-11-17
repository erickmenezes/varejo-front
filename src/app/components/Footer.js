import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-md-3 mb-3">
            <select className="form-control" name="show">
              <option value="4">4 produtos por página</option>
              <option value="8">8 produtos por página</option>
              <option value="16">16 produtos por página</option>
              <option value="24">24 produtos por página</option>
            </select>
          </div>
          <div className="col-md-3 my-auto ml-auto">
            <div className="pagination text-center">
              <a href="#">
                <i class="far fa-window-minimize fa-rotate-270"></i>
                <i class="fas fa-chevron-left"></i>
              </a>
              <a href="#" className="mx-3">
                <i class="fas fa-chevron-left"></i>
              </a>
              <div>
                Páginas
              </div> 
              <a href="#" className="mx-3">
                <i class="fas fa-chevron-right"></i>
              </a>
              <a href="#">
                <i class="fas fa-chevron-right"></i>
                <i class="far fa-window-minimize fa-rotate-90"></i>
              </a>
            </div>
          </div>              
        </div>
      </footer>
    );
  }
}
 
export default Footer;
