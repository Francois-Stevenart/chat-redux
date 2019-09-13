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
        <h4>Messages List</h4>
        {this.props.messages.map((message) => {
          return <Message message={message} key={message.created_at} />;
        })}

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

