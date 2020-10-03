import React, { useState } from "react";
import Messages from "./Messages";
import "bootstrap/dist/css/bootstrap.min.css";

// export default class Chat extends Component {

// constructor(props) {
//   super(props);
//   this.state = {message: 'Type a message', messages: [], sendClicked: false}
//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }

export default function Chat() {
   const [state, setState] = useState({
      message: "Type a message",
      messages: [],
      sendClicked: false,
   });

   const handleChange = (event) => {
      setState((todo) => {
         return { message: event.target.value };
      });
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      setState(() => {
         return {
            message: "",
            messages: [...state.messages, state.message],
            sendClicked: true,
         };
      });
   };

   return (
      <div className="jumbotron">
         <Messages messages={state.messages} />
         <nav className="navbar navbar-default">
            <form>
               <textarea
                  type="text"
                  className="form-control"
                  value={state.message}
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
         {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
   );
}
