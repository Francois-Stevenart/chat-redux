import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel } from '../actions';
import { setMessages } from '../actions';

class ChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  handleClick = (channel) => {
    this.props.selectChannel(channel);
    this.props.setMessages(channel);
  };

  render() {
    return (
      <div className="channel-list">
        <h4>Redux Chat</h4>
        <ul>
          {this.props.channels.map((channel) => {
            return (
              <li
                className={(channel === this.props.selectedChannel) ? "selected-channel" : ""}
                key={channel}
                onClick={() => { this.handleClick(channel); }}
                role="presentation"
              >#{channel}</li>);
          })}
        </ul>
      </div>);
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, setMessages }, dispatch);
}
function mapStateToProps(state) {
  return { channels: state.channels, selectedChannel: state.selectedChannel };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
