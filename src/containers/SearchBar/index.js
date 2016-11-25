import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterByUsername, resetUsernameSearchFilter } from '../../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormReset = this.onFormReset.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.filterByUsername(this.state.term);

    // clear the form for users after submit
    this.setState({ term: '' });
  }

  onFormReset(event) {
    event.preventDefault();
    this.props.resetUsernameSearchFilter();
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} onReset={this.onFormReset} className="input-group">
        <input
          placeholder="Filter username"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
          <button type="reset" className="btn btn-secondary">Clear</button>
        </span>
      </form>
    );
  }
}

SearchBar.propTypes = {
  filterByUsername: React.PropTypes.func,
  resetUsernameSearchFilter: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ filterByUsername, resetUsernameSearchFilter }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
