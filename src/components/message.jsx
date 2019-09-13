import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <p>{props.message.author}</p>
    </div>);
};

export default Message;

