import React from "react";

import './message.style.scss'

const Message = ({user, message, timestamp}) => {
    return (
        <div className="message-container">
            <p className="userName">{user} {timestamp }</p>
            <p className="message">{ message }</p>
        </div>
    )
}

export default Message