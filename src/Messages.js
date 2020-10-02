import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Messages = (props) => {
    return(
      <div className="messages">
        <ul className="list-group">
          {props.messages.map((message, i) =>
            <li className="list-group-item" key={i}>
              {message}
            </li>
          )}
        </ul>
      </div>
    );
}
export default Messages;
