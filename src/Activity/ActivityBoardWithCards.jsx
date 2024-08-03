import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaGamepad, FaBaby, FaBars } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import "./ActivityBoard.scss";
import ActivityBoard from "./ActivityBoard";

const IconCard = ({ items }) => (
  <Card className="text-center">
    <Card.Body>
      {items.map((item, index) => (
        <div
          key={index}
          className="d-flex align-items-center justify-content-between my-3 w-100"
        >
          <div className="d-flex align-items-center">
            <div className="icon-container bg-danger p-2 rounded-5">{item.icon}</div>
            <div className="title-container mx-3">
              <h6>{item.title}</h6>
            </div>
          </div>
          <RiArrowRightSLine className="arrow-icon bg-secondary px-1 rounded-5" />
        </div>
      ))}
    </Card.Body>
  </Card>
);

const IconCardsRow = () => {
  const items = [
    { icon: <FaGamepad size={30} />, title: "Goals" },
    { icon: <FaBaby size={30} />, title: "Popular Dishes" },
    { icon: <FaBars size={30} />, title: "Menus" },
  ];

  return <IconCard items={items} />;
};

const ActivityBoardWithCards = () => (
  <Container>
    <Row>
      <Col md={8}>
        <ActivityBoard />
      </Col>
      <Col md={4}>
        <IconCardsRow />
      </Col>
    </Row>
  </Container>
);

export default ActivityBoardWithCards;
