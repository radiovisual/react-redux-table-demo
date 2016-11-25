import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortBy } from '../../actions/index';

class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.dispatchSort = this.dispatchSort.bind(this);
  }
  dispatchSort(key) {
    this.props.sortBy(key);
  }

  render() {
    return (
      <thead>
        <tr>
          <th onClick={() => { this.dispatchSort('id'); }}>ID</th>
          <th onClick={() => { this.dispatchSort('username'); }}>Username</th>
          <th onClick={() => { this.dispatchSort('postTitle'); }}>Post Title</th>
          <th onClick={() => { this.dispatchSort('views'); }}>Views</th>
          <th onClick={() => { this.dispatchSort('likes'); }}>Likes</th>
          <th onClick={() => { this.dispatchSort('createdAt'); }}>Created at</th>
        </tr>
      </thead>
    );
  }
}

TableHeader.propTypes = {
  sortBy: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sortBy }, dispatch);
}

export default connect(null, mapDispatchToProps)(TableHeader);
