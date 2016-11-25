import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewRow } from '../../actions/index';

class AddNewBar extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', postTitle: '', views: '', likes: '' };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onFormReset = this.onFormReset.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPostTitleChange = this.onPostTitleChange.bind(this);
    this.onViewsChange = this.onViewsChange.bind(this);
    this.onLikesChange = this.onLikesChange.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onPostTitleChange(event) {
    this.setState({ postTitle: event.target.value });
  }

  onViewsChange(event) {
    this.setState({ views: event.target.value });
  }

  onLikesChange(event) {
    this.setState({ likes: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.addNewRow(this.state);

    // clear the form for users after submit
    this.clearForm();
  }

  onFormReset(event) {
    event.preventDefault();
    this.clearForm();
  }

  clearForm() {
    this.setState({ username: '', postTitle: '', views: '', likes: '' });
  }

  render() {
    return (
      <div className="add-new-bar">
        <form onSubmit={this.onFormSubmit} onReset={this.onFormReset} className="input-group">
          <input
            placeholder="Username"
            className="form-control"
            value={this.state.username}
            onChange={this.onUsernameChange}
          />
          <input
            placeholder="Post Title"
            className="form-control"
            value={this.state.postTitle}
            onChange={this.onPostTitleChange}
          />
          <input
            placeholder="Views"
            className="form-control"
            value={this.state.views}
            onChange={this.onViewsChange}
          />
          <input
            placeholder="Likes"
            className="form-control"
            value={this.state.likes}
            onChange={this.onLikesChange}
          />
          <span className="input-group">
            <button type="submit" className="btn btn-secondary">Submit</button>
            <button type="reset" className="btn btn-secondary">Clear</button>
          </span>
        </form>
      </div>
    );
  }
}

AddNewBar.propTypes = {
  addNewRow: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewRow }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddNewBar);
