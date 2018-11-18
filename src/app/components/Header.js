import React, { Component } from 'react';

import logo from '../assets/images/mmartan.jpg';

class Header extends Component {
  render() {
    return (
      <header className="row my-3">
        <div className="col-md-3">
          <a href='/' >
            <img src={logo} className="logo" alt="logo" />
          </a>
        </div>
        <div className="col-md-3 my-auto ml-auto searchBox">
          <form method="post">
            <div className="form-group my-auto">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white">
                    <i className="text-muted fas fa-search"></i>
                  </span>
                </div>
                <input type="text" className="form-control border-left-0" placeholder="Buscar"></input>
              </div>                  
            </div>
          </form> 
        </div>
      </header>
    );
  }
}
 
export default Header;
