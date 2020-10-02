import React, { useState } from 'react';
import Chat from './Chat';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = (props) => {
  const [state,setState] = useState({
      chatClicked:false,
      chatListClicked:[]
    });

  const handleChat = (event) => {
    event.preventDefault();
    setState(prevValue => {
      return{
        chatClicked: true,
        chatListClicked:[...prevValue.chatListClicked, prevValue.chatClicked]
      }
    });
  }

  return (
      <div className="contacts">
        <ul className="list-group contact-list">
          {state.chatClicked && <Chat />}
            {props.names.map((name, i) =>
              <li className="list-group-item contact-item" key={i}>
                <nav className="navbar navbar-default">
                  <button type="button" className="btn btn-default contact-id">
                    {name.match(/\b(\w)/g)}
                  </button>
                  <button type="button" className="btn btn-primary chat" onClick={handleChat}>Chat</button>
                </nav>
              </li>
            )}
        </ul>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
  );
}
export default Contacts;
