import React, { Component } from 'react';

import '../assets/stylesheets/app.css';
import logo from '../assets/images/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container">
          <header className="row my-3">
            <div className="col-md-3">
              <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="col-md-3 my-auto ml-auto">
              <form method="post">
                <div className="form-group my-auto">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-white">
                        <i className="text-muted fas fa-search"></i>
                      </span>
                    </div>
                    <input type="text" className="form-control" placeholder="Buscar"></input>
                    <button className="btn btn-primary" type="submit">Buscar</button>
                  </div>                  
                </div>
              </form>
            </div>
          </header>
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

          <hr/>

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
        </div>          
      </div>
    );
  }
}
 
export default App;
