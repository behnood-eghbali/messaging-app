import React, { useState, useCallback } from 'react';
import Messages from './Messages';
import 'bootstrap/dist/css/bootstrap.min.css';

const Chat = () => {
  const [message, setMessage] = useState('Type a message');
  const [messages, setMessages] = useState([]);
  const [sendClicked, setSendClicked] = useState(false);


  const handleChange = useCallback((event) => {
    setMessage(event.target.value);
  }, [setMessage]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    setMessages([...messages, message]);
    setMessage('');
    setSendClicked(!sendClicked);
  }, [
    message,
    setMessage,
    messages,
    setMessages,
    sendClicked,
    setSendClicked
  ]);

  return (
    <div className="jumbotron">
      <Messages messages={messages} />
      <nav className="navbar navbar-default">
        <form>
          <textarea
            type="text"
            className="form-control"
            value={message}
            onChange={handleChange}
          />
          <button
            type="submit"
            value="Submit"
            onClick={handleSubmit}
            className="btn btn-primary send"
          >
            Send
          </button>
        </form>
      </nav>
      <pre>{JSON.stringify({message, messages}, null, 2)}</pre>
    </div>
  );
}

export default Chat;