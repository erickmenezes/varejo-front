import React from 'react';
import ReactQueryParams from 'react-query-params';

import logo from '../assets/images/mmartan.jpg';

class Header extends ReactQueryParams {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setQueryParams({
      search: this.refs.inputSearch.value,
      page: undefined
    });

    window.location.reload();
  }

  render() {
    return (
      <header className="row my-3">
        <div className="col-md-3">
          <a href='/' >
            <img src={logo} className="logo" alt="logo" />
          </a>
        </div>
        <div className="col-md-3 my-auto ml-auto searchBox">
          <form ref="formSearch" onSubmit={this.handleSubmit}>
            <div className="form-group my-auto">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-white">
                    <i className="text-muted fas fa-search"></i>
                  </span>
                </div>
                <input type="search" className="form-control border-left-0" ref="inputSearch" placeholder="Buscar"
                defaultValue={this.props.search}></input>
              </div>                  
            </div>
          </form> 
        </div>
      </header>
    );
  }
}
 
export default Header;
