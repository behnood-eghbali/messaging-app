import React, { useState } from "react";
import AddContact from "./AddContact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// export default class App extends Component {
//    constructor(props) {
//       super(props);
//       this.state = { newContactClicked: false };
//       this.handleNewContact = this.handleNewContact.bind(this);
//    }

//    handleNewContact(event) {
//       event.preventDefault();
//       this.setState({ newContactClicked: true });
//    }

export default function App() {
   const [newContactClicked, setnewContact] = useState(false);

   const handleNewContact = (event) => {
      event.preventDefault();
      setnewContact(() => {
         return { newContactClicked: true };
      });
   };

   const newIsClicked = newContactClicked;
   return (
      <div className="App">
         <header className="App-header">
            <h2 className="App-title">React Messaging App</h2>
         </header>
         <div className="row">
            <div className="col-md-2 col-lg-2" />
            <div className="col-md-8 col-lg-8">
               <div className="jumbotron">
                  <button
                     type="button"
                     onClick={handleNewContact}
                     style={{ display: newIsClicked ? "none" : "block" }}
                     className="btn btn-primary"
                  >
                     New Contact
                  </button>
                  {newIsClicked && <AddContact />}
                  {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
               </div>
            </div>
            <div className="col-md-2 col-lg-2" />
         </div>
      </div>
   );
}
