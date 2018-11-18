import React from 'react';
import ReactQueryParams from 'react-query-params';

class Footer extends ReactQueryParams {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let newQs = Object.assign({}, this.queryParams, {});
    newQs.limit = event.target.value;
    this.setQueryParams(newQs);

    window.location.reload();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setQueryParams({
      page: this.refs.inputPage.value
    });

    window.location.reload();
  }

  definePagination() {
    let pagination = this.props.pagination;
    let maxPagination = pagination.totalPages;

    let elements = Array(5).fill().map((_, idx) => {
      let currentPage = pagination.currentPage || 1;
      let page = idx + currentPage;

      if (currentPage === page) {
        return (
          <form key={"form" + page} ref="formPage" className="d-contents" onSubmit={this.handleSubmit}>
            <input 
              key={page} 
              type="tel" 
              ref="inputPage"
              maxLength="2" 
              className="form-control d-inline go-to" 
              defaultValue={page}>
            </input>
          </form>
        );
      } else {
        if (page <= maxPagination) {
          let url = "/?page=" + page;
          let href = pagination.qs.length === 0 ? url : url + '&' + pagination.qs

          return (<a key={page} href={href} className="text-muted my-auto mx-3">{page}</a>);
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
            <form ref="formLimit">
              <select className="form-control" name="limit" defaultValue={this.queryParams.limit || 8} onChange={this.handleChange}>
                <option value="4">4 produtos por página</option>
                <option value="8">8 produtos por página</option>
                <option value="16">16 produtos por página</option>
                <option value="24">24 produtos por página</option>
              </select>
            </form>
          </div>

          <div className="col-md-4 my-auto ml-auto">
            <div className="pagination text-center">
              <a href={"/?" + this.props.pagination.qs} className="text-muted my-auto">
                <i className="far fa-window-minimize fa-rotate-270"></i>
                <i className="fas fa-chevron-left"></i>
              </a>
              <a href={this.props.pagination.previous || '/?' + this.props.pagination.qs} className="text-muted mx-3 my-auto">
                <i className="fas fa-chevron-left"></i>
              </a>
              {this.definePagination()}
              <a href={this.props.pagination.next} className="text-muted my-auto mx-3 my-auto">
                <i className="fas fa-chevron-right"></i>
              </a>
              <a href={"/page=" + this.props.pagination.totalPages + '&' + this.props.pagination.qs} className="text-muted my-auto">
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
