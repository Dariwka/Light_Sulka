import "./Footer.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <Row>
              <Link to="/">About Us</Link>
            </Row>
            <Row>
              <Link to="/signin">Sign In</Link>
            </Row>
            <Row>
              <Link to="/calculator">BMR Calculator</Link>
            </Row>
          </Col>
          <Col>
            <Row>
              <Link to="/prices">Prices</Link>
            </Row>
            <Row>
              <Link to="/payments">Payments</Link>
            </Row>
            <Row>
              <Link to="/delivery">Delivery</Link>
            </Row>
          </Col>
          <Col>
            <Row>
              <p>Subscribe</p>
              <input type="email" />
              <button>Subscribe</button>
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
      <div className="footer_bottom">
        <p>Copyrights © Diana Korotkevica 2021</p>
      </div>
    </div>
  );
};

export default Footer;