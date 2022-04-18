import React from "react";
import "./Dashboard.css";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import AddStudent from "../AddStudent/AddStudent";

class Dashboard extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div>
        <Container className="dashboard-container" fluid>
          <h1>Student Dashboard</h1>
          <Row className="row">
            <Col lg={5} className="left-col">
              <h3>Add Student</h3>
              <AddStudent/>
            </Col>
            <Col lg={7} className="right-col">
              <h3>Student Information</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Student Name</th>
                    <th>Get Info</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark Angel</td>
                    <td>
                      <Button size="sm" variant="info">
                        See Details
                      </Button>
                    </td>
                    <td className="td-action">
                      <Button className="action-btn" size="sm" variant="danger">
                        Delete
                      </Button>
                      <Button
                        className="action-btn"
                        size="sm"
                        variant="secondary"
                      >
                        Update
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
