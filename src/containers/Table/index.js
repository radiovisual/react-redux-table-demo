import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import TableHeader from '../../containers/TableHeader';

class Table extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }
  renderRow(rowData) {
    const { id, username, postTitle, views, likes, createdAt } = rowData;
    const highlightedClass = classNames({
      highlighted: username === this.props.rows.currentUser,
    });
    return (
      <tr key={id} className={highlightedClass}>
        <td>{id}</td>
        <td>{username}</td>
        <td>{postTitle}</td>
        <td>{views}</td>
        <td>{likes}</td>
        <td>{createdAt}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover table-bordered">
        <TableHeader />
        <tbody>
          {this.props.rows.visibleRows.map(this.renderRow)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ rows }) {
  return { rows };
}

Table.propTypes = {
  rows: React.PropTypes.object,
};

export default connect(mapStateToProps, null)(Table);
