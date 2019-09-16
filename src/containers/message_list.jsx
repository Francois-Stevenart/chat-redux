import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

import Message from "../components/message";
import MessageForm from "./message_form";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.messagesHeight = null;
    this.setMessagesHeightRef = (element) => {
      this.messagesHeight = element;
    };
    this.scrollDown = () => {
      this.messagesHeight.scrollTop = this.messagesHeight.scrollHeight;
      console.log(this.messagesHeight.scrollTop);
    };
  }
  componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    this.refresher = setInterval(() => {
      this.props.setMessages(this.props.selectedChannel);
    }, 2000);
  }

  componentDidUpdate() {
    this.scrollDown();
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  render () {
    return (
      <div className="message-list" ref={this.setMessagesHeightRef} >
        <div className="message-list-header">
          <h4 onClick={this.scrollDown} >Messages List</h4>
        </div>
        <div className="messages-container">
          {this.props.messages.map((message) => {
            return <Message message={message} key={message.created_at} />;
          })}
        </div>
        <div>
          <MessageForm />
        </div>
      </div>);
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages }, dispatch);
}
function mapStateToProps(state) {
  return { messages: state.messages, selectedChannel: state.selectedChannel };
}

// export default MessageList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

