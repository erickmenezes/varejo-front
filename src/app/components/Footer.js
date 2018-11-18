import React, { Component } from 'react';

class Footer extends Component {
  definePagination() {
    let pagination = this.props.pagination;
    let maxPagination = pagination.totalPages;

    console.log(pagination.currentPage);

    let elements = Array(5).fill().map((_, idx) => {
      let page = idx + 1;

      if (pagination.currentPage === page) {
        return ( <input key={page} type="text" className="form-control d-inline go-to" defaultValue="1"></input> );
      } else {
        if (page <= maxPagination) {
          return (<a key={page} href={"/page=" + page} className="text-muted my-auto mx-3">{page}</a>);
        } else {
          return (<label key={page} className="text-muted my-auto mx-3">{page}</label>);
        }
      }
    });

    return (
      elements
    );
  }

  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-md-3 mb-3">
            <select className="form-control" name="limit" defaultValue="8">
              <option value="4">4 produtos por página</option>
              <option value="8">8 produtos por página</option>
              <option value="16">16 produtos por página</option>
              <option value="24">24 produtos por página</option>
            </select>
          </div>

          <div className="col-md-4 my-auto ml-auto">
            <div className="pagination text-center">
              <a href="/" className="text-muted my-auto">
                <i className="far fa-window-minimize fa-rotate-270"></i>
                <i className="fas fa-chevron-left"></i>
              </a>
              <a href={this.props.pagination.previous || '/'} className="text-muted mx-3 my-auto">
                <i className="fas fa-chevron-left"></i>
              </a>
              {this.definePagination()}
              <a href={this.props.pagination.next} className="text-muted my-auto mx-3 my-auto">
                <i className="fas fa-chevron-right"></i>
              </a>
              <a href={"/page=" + this.props.pagination.totalPages} className="text-muted my-auto">
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
