import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from 'react-js-pagination';
import { changeMaximumRows, updateCurrentPaginationPage } from '../../actions';
import Select from '../../components/Select';

class FooterButtons extends Component {
  constructor(props) {
    super(props);

    this.onSelectChange = this.onSelectChange.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  onSelectChange(event) {
    this.props.changeMaximumRows(Number(event.target.value));
  }

  handlePageChange(selectedPage) {
    this.props.updateCurrentPaginationPage(selectedPage);
  }

  render() {
    return (
      <div className="input-group footer-btns">
        <Select
          value={this.props.rows.maximumRows}
          options={[
            { value: '5', label: '5' },
            { value: '10', label: '10' },
            { value: '15', label: '15' },
            { value: '20', label: '20' },
          ]}
          onChange={this.onSelectChange}
        />

        <div className="inline-block label left-pad">Paginate: </div>

        <Pagination
          activePage={this.props.rows.currentPage}
          itemsCountPerPage={this.props.rows.maximumRows}
          totalItemsCount={this.props.rows.rows.length}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

FooterButtons.propTypes = {
  rows: React.PropTypes.object,
  changeMaximumRows: React.PropTypes.func,
  updateCurrentPaginationPage: React.PropTypes.func,
};

function mapStateToProps({ rows }) {
  return { rows };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeMaximumRows, updateCurrentPaginationPage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterButtons);
