import React from "react";
import "./ActivityBoard.scss"
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const TableOrders = () => (
  <Container>
    <Row>
      <Col md={8}>
        <Card className="text-center">
          <Card.Body>
            <h5>Recent Orders</h5>
            <div className="table-responsive w-100">
              <table className="table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Order No</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="path/to/profile-photo.jpg"
                        alt=""
                        className="profile-photo"
                      />
                      <span>John Doe</span>
                    </td>
                    <td>123456</td>
                    <td>$100</td>
                    <td>
                      <span className="badge badge-success">Delivered</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="path/to/profile-photo.jpg"
                        alt=""
                        className="profile-photo"
                      />
                      <span>Jason hitman</span>
                    </td>
                    <td>436789</td>
                    <td>$80</td>
                    <td>
                      <span className="badge badge-danger">Cancelled</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="path/to/profile-photo.jpg"
                        alt=""
                        className="profile-photo"
                      />
                      <span>Tomy hilfer</span>
                    </td>
                    <td>847879</td>
                    <td>$130</td>
                    <td>
                      <span className="badge badge-primary">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="path/to/profile-photo.jpg"
                        alt=""
                        className="profile-photo"
                      />
                      <span>Thor raganrok</span>
                    </td>
                    <td>64878</td>
                    <td>$125</td>
                    <td>
                      <span className="badge badge-success">Delivered</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="text-center">
          <Card.Body>
            <h5>Customer Feedback</h5>
            <div className="feedback-scroll">
              <div className="feedback-item text-start">
                <img
                  src="path/to/profile-photo.jpg"
                  alt=""
                  className="profile-photo"
                />
                <span>Jane Smith</span>
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < 4 ? "filled" : "empty"} />
                  ))}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="feedback-item text-start">
                <img
                  src="path/to/profile-photo.jpg"
                  alt=""
                  className="profile-photo"
                />
                <span>Henrry</span>
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < 3 ? "filled" : "empty"} />
                  ))}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="feedback-item text-start">
                <img
                  src="path/to/profile-photo.jpg"
                  alt=""
                  className="profile-photo"
                />
                <span>Caren John</span>
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < 5 ? "filled" : "empty"} />
                  ))}
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default TableOrders;
