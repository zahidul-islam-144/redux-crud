import React, { Component } from 'react';
import {
  dataAdd,
  singleDataFetch,
  dataEdit,
} from "../../actions/dataListActions";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Table, Button, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Moment from "moment";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endTime: "",
      startTime: "",
      endDate: "",
      description: "",
      add: false,
      edit: false,
      getId: "",
      singledata: null,
    };
  }

  getId() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const id = urlSearchParams.get("id");

    if (!id || id.length === 0) {
      return "";
    }

    return id;
  }
  // componentDidMount= async () => {
  //   const job_id = this.getId();
  //   this.setState({ getId: job_id });
  // await this.props.singleDataFetch(this.state.getId);
  // }

  componentDidMount() {
    const job_id = this.getId();
    this.setState({ getId: job_id });
    if (job_id != "") {
      this.props.singleDataFetch(job_id);
    }

    // this.setState({
    //   startDate: this.props.singledata.startDate,
    //   endDate: this.props.singledata.endDate,
    //   startTime: this.props.singledata.startTime,
    //   endTime: this.props.singledata.endTime,
    //   description: this.props.singledata.description,
    // });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      startDate: newProps.singledata.startDate,
      endDate: newProps.singledata.endDate,
      startTime: newProps.singledata.startTime,
      endTime: newProps.singledata.endTime,
      description: newProps.singledata.description,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      description: this.state.description,
    };

    if (
      this.state.startDate != null &&
      this.state.endDate != null &&
      this.state.startTime != null &&
      this.state.endTime != null &&
      this.state.description != null
    ) {
      this.props.dataAdd(data);
      this.setState({
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        description: "",
      });
    } else {
      toast.error("Field missing");
    }
  };

  handleEdit=(e)=>{
        e.preventDefault();
        let data = {
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          startTime: this.state.startTime,
          endTime: this.state.endTime,
          description: this.state.description,
        };

        if (
          this.state.startDate != null &&
          this.state.endDate != null &&
          this.state.startTime != null &&
          this.state.endTime != null &&
          this.state.description != null
        ) {
          this.props.dataEdit(data,this.state.getId);
          this.setState({
            startDate: "",
            endDate: "",
            startTime: "",
            endTime: "",
            description: "",
          });
        } else {
          toast.error("Field missing");
        }

  }

  StartDateChange = (event) => {
    this.setState({ startDate: event.target.value });
  };
  EndDateChange = (event) => {
    this.setState({ endDate: event.target.value });
  };

  StartTimeChange = (event) => {
    this.setState({ startTime: event.target.value });
  };
  EndTimeChange = (event) => {
    this.setState({ endTime: event.target.value });
  };
  DescriveChange = (event) => {
    this.setState({ description: event.target.value });
  };
  render() {
    console.log("start date", this.state.startDate);
    // console.log("state data", this.state.startDate,this.state.startTime,this.state.endDate,this.state.endTime,this.state.description);
    return (
      <Container>
        <Row>
          <Col xs={6} style={{ margin: "auto", marginBottom: "50px" }}>
            <h4>Add TimeLog</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={6} style={{ margin: "auto",marginBottom:"50px" }}>
            <Link to="/">
              <Button>Back to the List</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={6} style={{ margin: "auto" }}>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="08-Dec-2021"
                    name="startDate"
                    value={Moment(this.state.startDate).format("yyyy-MM-DD")}
                    onChange={this.StartDateChange}
                  />
                  <Form.Label>Start Time</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="10:20"
                    name="startTime"
                    value={this.state.startTime}
                    onChange={this.StartTimeChange}
                  />

                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="09-Dec-2021"
                    name="endDate"
                    value={Moment(this.state.endDate).format("yyyy-MM-DD")}
                    onChange={this.EndDateChange}
                  />
                  <Form.Label>End Time</Form.Label>
                  <Form.Control
                    type="time"
                    placeholder="14:20"
                    name="endTime"
                    value={this.state.endTime}
                    onChange={this.EndTimeChange}
                  />

                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    onChange={this.DescriveChange}
                  />
                </Form.Group>
                {this.state.getId != "" ? (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={this.handleEdit.bind(this)}
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={this.handleSubmit.bind(this)}
                  >
                    Submit
                  </Button>
                )}
              </Form>
              <br />
              {/* <form>
                <label>Start Date Time</label>
                <input
                  type="date"
                  name="startDateTime"
                  onChange={this.StartDateTimeChange}
                />
                <label>End Date Time</label>
                <input
                  type="datetime"
                  name="endDateTime"
                  onChange={this.EndDateTimeChange}
                />

                <label>Description</label>
                <input
                  type="text"
                  name="describe"
                  onChange={this.DescriveChange}
                  value={this.state.description}
                  placeholder="Description"
                />
                <button onClick={this.handleSubmit.bind(this)} type="submit">
                  submit
                </button>
              </form> */}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    singledata: state.data.singledata,
  };
};
export default connect(mapStateToProps, { dataAdd, singleDataFetch, dataEdit })(
  withRouter(Login)
);
