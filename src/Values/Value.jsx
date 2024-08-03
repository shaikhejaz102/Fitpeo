import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaArrowUp,
  FaArrowDown,
  FaDollarSign,
  FaBox,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import "./Value.scss";
import ActivityBoardWithCards from "../Activity/ActivityBoardWithCards"
import TableOrders from "../Activity/TableOrders";

// Registering Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const data = {
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ["#5151ff", "#33339d"],
      borderWidth: 0,
    },
  ],
  labels: ["Completed", "Remaining"],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: () => "",
      },
    },
  },
  cutout: "70%",
};

const Value = () => (
  <Container fluid>
    <Row className="mb-4">
      <Col>
        <h1>Dashboard</h1>
      </Col>
    </Row>
    <div>
      <Row className="mb-4">
        <Col md={2}>
          <Card className="text-center">
            <div className="d-flex justify-content-between m-2">
              <FaBox className="order-icon" size={40} />
            </div>
            <Card.Body>
              <h5>Total Orders</h5>
            </Card.Body>
            <div className="d-flex justify-content-between align-items-center m-2">
              <h3>75</h3>
              <p className="text-success">
                <FaArrowUp /> 3%
              </p>
            </div>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center">
            <div className="d-flex justify-content-between m-2">
              <FaCheckCircle className="deliver-icon" size={40} />
            </div>
            <Card.Body>
              <h5>Total Delivered</h5>
            </Card.Body>
            <div className="d-flex justify-content-between align-items-center m-2">
              <h3>70</h3>
              <p className="text-danger">
                <FaArrowDown /> 3%
              </p>
            </div>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center">
            <div className="d-flex justify-content-between m-2">
              <FaTimesCircle className="cancel-icon" size={40} />
            </div>
            <Card.Body>
              <h5>Total Cancelled</h5>
            </Card.Body>
            <div className="d-flex justify-content-between align-items-center m-2">
              <h3>05</h3>
              <p className="text-success">
                <FaArrowUp /> 3%
              </p>
            </div>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="text-center">
            <div className="d-flex justify-content-between m-2">
              <FaDollarSign className="revenue-icon" size={40} />
            </div>
            <Card.Body>
              <h5>Total Revenue</h5>
            </Card.Body>

            <div className="d-flex justify-content-between align-items-center m-2">
              <h3>$12k</h3>
              <p className="text-danger">
                <FaArrowDown /> 3%
              </p>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <div className="d-flex justify-content-between mx-2 mt-2">
              <h6>Net Profit</h6>
            </div>
            <Card.Body className="body-change">
              <div>
                <h1>$6759.25</h1>
              </div>
              <Col
                md={2}
                className="d-flex justify-content-center align-items-center"
              >
                <Doughnut data={data} options={options} />
              </Col>
            </Card.Body>
            <div className="d-flex justify-content-between align-items-center mx-2 mb-2">
              <p className="text-success">
                <FaArrowUp /> 3%
              </p>
              <h6 className="mt-3">70% Goal Complete</h6>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <ActivityBoardWithCards />
      </Row>
      <Row className="mb-4">
        <TableOrders/>
      </Row>
    </div>
  </Container>
);

export default Value;
