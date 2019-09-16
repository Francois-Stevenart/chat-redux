import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({ value: '' });
    event.preventDefault();
  };

  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>);
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}
function mapStateToProps(state) {
  return { currentUser: state.currentUser, selectedChannel: state.selectedChannel };
}

// export default MessageForm;
export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
