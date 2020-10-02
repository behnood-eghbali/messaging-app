import React, { useCallback, useState } from 'react';
import AddContact from './AddContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [newContactClicked, setNewContactClicked] = useState(false);

  const handleNewContact = useCallback(event => {
    event.preventDefault();
    setNewContactClicked(true);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title">React Messaging App</h2>
      </header>
      <div className="row">
        <div className="col-md-2 col-lg-2"/>
        <div className="col-md-8 col-lg-8">
          <div className="jumbotron">
            <button type="button" onClick={handleNewContact} style={{'display': newContactClicked ? 'none' : 'block'}} className="btn btn-primary">New Contact
            </button>
            {newContactClicked && <AddContact />}
            <pre>{JSON.stringify({ newContactClicked }, null, 2)}</pre>
          </div>
        </div>
        <div className="col-md-2 col-lg-2"/>
      </div>
    </div>
  );
}

export default App;