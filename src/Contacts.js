import React, { useState, useCallback } from 'react';
import Chat from './Chat';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = ({ names }) => {
  const [chatClicked, setChatClicked] = useState(false);
  const [chatListClicked, setChatListClicked] = useState([]);


  const handleChat = useCallback((event) => {
    event.preventDefault();
    setChatListClicked([...chatListClicked, chatClicked])
    setChatClicked(true);
  }, [chatClicked, chatListClicked]);

  return (
      <div className="contacts">
        <ul className="list-group contact-list">
          {chatClicked && <Chat />}
            {names.map((name, i) =>
              <li
                className="list-group-item contact-item"
                key={i}
              >
                <nav className="navbar navbar-default">
                  <button
                    type="button"
                    className="btn btn-default contact-id"
                  >
                    { name.match(/\b(\w)/g) }
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary chat"
                    onClick={handleChat}>
                      Chat
                  </button>
                </nav>
              </li>
            )}
        </ul>
        <pre>{JSON.stringify({ chatClicked, chatListClicked }, null, 2)}</pre>
      </div>
  );
}
export default Contacts;
