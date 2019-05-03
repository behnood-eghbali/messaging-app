import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Messages extends Component {

  render() {
    return(
      <div className="messages">
        <ul className="list-group">
          {this.props.messages.map((message, i) =>
            <li className="list-group-item" key={i}>
              {message}
            </li>
          )}
        </ul>
      </div>
    );
  }
}