import React from "react";
import "./style.css";

function Form() {

  function handleFormSubmit(e) {
    e.preventDefault();
    alert("message sent!")
    console.log("message not actually sent - working on this feature")
  }

  return (
    <form>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input type="text" className="form-control" id="exampleInputName"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" id="exampleInputEmail"></textarea>
        </div>
        <button id="contactBtn" type="submit" className="btn btn-warning" onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}

export default Form;
