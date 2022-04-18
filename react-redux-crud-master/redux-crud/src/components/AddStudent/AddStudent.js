import React, { Component } from "react";
import { Button } from "react-bootstrap";

class AddStudent extends Component {
  render() {
    return (
      <div>
        <form>
          <p>
            <label>First Name</label>
            <br />
            <input required />
          </p>
          <p>
            <label>Last Name</label>
            <br />
            <input required />
          </p>
          <p>
            <label>Department</label>
            <br />
            <input required />
          </p>
          <p>
            <label>Passing year</label>
            <br />
            <input required />
          </p>
        </form>
        <Button variant="success">Submit</Button>
      </div>
    );
  }
}

export default AddStudent;
