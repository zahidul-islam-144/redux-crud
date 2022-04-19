import React, { Component } from "react";
import { Button } from "react-bootstrap";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      department: "",
      pass_year: "",
    };
  }
  // handleOnchange = (e) => {
  //   e.preventDefault();
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   const student = {
  //     fname: this.state.fname,
  //     lname: this.state.lname,
  //     department: this.state.department,
  //     pass_year: this.state.pass_year,
  //   };
  // };
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
