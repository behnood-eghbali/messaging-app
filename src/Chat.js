import React, { Component } from 'react';
import Messages from './Messages';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {message: 'Type a message', messages: [], sendClicked: false}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({message: '', messages: [...this.state.messages, this.state.message], sendClicked: true});
  }

  render() {
    return (
      <div className="jumbotron">
        <Messages messages={this.state.messages} />
        <nav className="navbar navbar-default">
          <form>
            <textarea type="text" className="form-control" value={this.state.message} onChange={this.handleChange} />
            <button type="submit" value="Submit" onClick={this.handleSubmit} className="btn btn-primary send">Send</button>
          </form>
        </nav>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}
