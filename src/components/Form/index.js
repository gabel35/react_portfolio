import React from "react";
import "./style.css";

function Form(props) {
  return (
    <form>
        <div className="form-group">
          <label for="exampleInputName">Name</label>
          <input type="text" className="form-control" id="exampleInputName"/>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" id="exampleInputEmail"></textarea>
        </div>
        <button id="contactBtn" type="submit" className="btn btn-warning" onClick={props.handleFormSubmit}>Submit</button>
    </form>
  );
}

export default Form;
