import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

import Message from "../components/message";

class MessageList extends Component {
  componentWillMount() {
    this.props.setMessages();
  }

  render () {
    return (
      <div className="message-list">
        <div className="message-list-header">
          <h4>Messages List</h4>
        </div>
        <div className="messages-container">
          {this.props.messages.map((message) => {
            return <Message message={message} key={message.created_at} />;
          })}
        </div>
      </div>);
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages }, dispatch);
}
function mapStateToProps(state) {
  return { messages: state.messages };
}

// export default MessageList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

