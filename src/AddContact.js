import React, { useState, useCallback } from 'react';
import Contacts from './Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddContact = (props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [names, setNames] = useState([  ]);
  const [numbers, setNumbers] = useState([]);
  const [addContactClicked, setAddContactClicked] = useState(false);

  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  },[setName])

  const handleNumberChange = useCallback((event) => {
    setNumber(event.target.value);
  }, [setNumber]);

  const handleAddContact = useCallback((event) => {
    event.preventDefault();
    setNames([...names, name]);
    setNumbers([...numbers, number]);
    setName('');
    setNumber('');
    setAddContactClicked(!addContactClicked);
  }, [
    name,
    setName,
    names,
    setNames,
    number,
    setNumber,
    numbers,
    setNumbers,
    addContactClicked,
    setAddContactClicked
  ]);

  const searchContact = useCallback((event) => {
    let searchResult = names;
    searchResult = searchResult.filter(item => 
      item.toLowerCase().search(event.target.value.toLowerCase()) !== -1
    );
    setNames(searchResult);
    if (searchResult === 0) {
      console.log("No search results found.");
    }
  }, [names]);

  const contactInfo = {
    contactName: name,
    contactNumber: number,
  };

  return (
    <div>
      <Contacts names={names} /> 
      <form>
        <div className="form-group">
          <h3>Search Contact</h3>
          <input 
            type="text"
            className="form-control"
            onChange={searchContact}
            placeholder="Search" 
          />
          <h3>Add Contact</h3>
          <input
            type="text"
            value={contactInfo.contactName}
            onChange={handleNameChange}
            className="form-control"
            placeholder="Name"
            required
          />
          <input
            type="tel"
            value={contactInfo.contactNumber}
            onChange={handleNumberChange}
            className="form-control"
            placeholder="Phone Number (Format: 09123456789)"
            required
            minLength="11"
            maxLength="11"
          />
          <button
            type="submit"
            value="Submit"
            className="btn btn-primary"
            onClick={handleAddContact}>
            Add Contact
          </button>
        </div>
      </form>
      <pre>{JSON.stringify({name, number, names, numbers}, null, 2)}</pre>
    </div>
  );
}

export default AddContact;