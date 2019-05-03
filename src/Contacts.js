import React, { Component } from 'react';
import Chat from './Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contacts.css';

export default class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {chatClicked: false, chatListClicked: []};
    this.handleChat = this.handleChat.bind(this);
  }

  handleChat(event) {
    event.preventDefault();
    this.setState({chatClicked: true, chatListClicked: [...this.state.chatListClicked, this.state.chatClicked]});
  }

  render() {
    return (
      <div className="contacts">
        <ul className="list-group contact-list">
          {this.state.chatClicked && <Chat />}
            {this.props.names.map((name, i) =>
              <li className="list-group-item contact-item" key={i}>
                <nav className="navbar navbar-default">
                  <button type="button" className="btn btn-default contact-id">
                    {name.match(/\b(\w)/g)}
                  </button>
                  <button type="button" className="btn btn-primary chat" onClick={this.handleChat}>Chat</button>
                </nav>
              </li>
            )}
        </ul>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}
