import React, {useRef} from "react";
import "./style.css";

function Form() {

  const {name, email, message} = useRef();

  function handleFormSubmit(e) {
    alert("message sent!");
    console.log("message not actually sent - working on this feature");
  }

  return (
    <form>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input type="text" ref={name} className="form-control" id="exampleInputName"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" ref={email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea ref={message} className="form-control" id="exampleInputEmail"></textarea>
        </div>
        <button id="contactBtn" type="submit" className="btn btn-warning" onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}

export default Form;
