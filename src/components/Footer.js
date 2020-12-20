import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./css/footer.scss";

function Footer() {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col>
            <h1>ShehrVancouver</h1>
          </Col>
          <Col>
            <h3>Follow us on instagram</h3>
            <i className="fab fa-instagram"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
