import React, { Component } from 'react';
import Contacts from './Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AddContact extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', number: '', names: [], numbers: [], addContactClicked: false};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleAddContact = this.handleAddContact.bind(this);
    this.searchContact = this.searchContact.bind(this);
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleNumberChange(event) {
    this.setState({number: event.target.value});
  }

  handleAddContact(event) {
    event.preventDefault();
    this.setState({name: '', names: [...this.state.names, this.state.name], number: '', numbers: [...this.state.numbers, this.state.number], addContactClicked: true});
  }

  searchContact(event) {
    let searchResult = this.state.names;
    searchResult = searchResult.filter(item => 
      {return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1; })
      this.setState({names: searchResult});
      if (searchResult === 0) {
        console.log("No search results found.");
      }
  }

  render() {
    const contactInfo = {
      contactName: this.state.name,
      contactNumber: this.state.number
    }
    return (
      <div>
        <Contacts names={this.state.names} /> 
        <form>
          <div className="form-group">
            <h3>Search Contact</h3>
            <input type="text" className="form-control" onChange={this.searchContact} placeholder="Search" />
            <h3>Add Contact</h3>
            <input type="text" value={contactInfo.contactName} onChange={this.handleNameChange} className="form-control" placeholder="Name" required/>
            <input type="tel" value={contactInfo.contactNumber} onChange={this.handleNumberChange} className="form-control" placeholder="Phone Number (Format: 09123456789)" required minLength="11" maxLength="11"/>
            <button type="submit" value="Submit" className="btn btn-primary" onClick={this.handleAddContact}>Add Contact</button>
          </div>
        </form>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}
