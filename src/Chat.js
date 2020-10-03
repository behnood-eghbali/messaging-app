import React, { useState } from "react";

import Messages from "./Messages";
import "bootstrap/dist/css/bootstrap.min.css";

const Chat = (props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [sendClicked, setSendClicked] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setMessage(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
    setMessages([...messages, message]);
    setSendClicked(true);
  };
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
            placeholder="Type a message"
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
      <pre>{JSON.stringify({ message, messages, sendClicked }, null, 2)}</pre>
    </div>
  );
};

export default Chat;
