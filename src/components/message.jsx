import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <div className="message-header">
        <p className="author">{props.message.author}</p>
        <p className="date">{props.message.created_at}</p>
      </div>
      <div className="message-content">
        {props.message.content}
      </div>
    </div>);
};

export default Message;

