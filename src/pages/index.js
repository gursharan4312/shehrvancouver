import React from "react";
import { navigate } from "gatsby";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import { Col, Container, Row } from "reactstrap";
import "../components/css/homePage.scss";
import Galllery from "../components/Galllery";

function index() {
  return (
    <Layout>
      <Carousel />
      <Container>
        <Row className="mt-5 px-4">
          <h1>About Us</h1>
          <p>
            Studying in a different country can be both exciting and
            challenging. If you have applied to a college or university, or you
            are just thinking about studying in Vancouver, ShehrVancouver is
            there to help.
          </p>
          <p>
            We help new or existing students that are looking for accomodations
            or need help in finding jobs.
          </p>
        </Row>
        <Row className="action-buttons mb-5">
          <Col
            className="btn btn-warning  mx-2 text-center py-5"
            onClick={() => navigate("/confession")}
          >
            Confession
          </Col>
          <Col
            className="btn btn-info mx-2 text-center py-5"
            onClick={() => navigate("/jobs")}
          >
            Jobs
          </Col>
          <Col
            className="btn btn-success mx-2 text-center py-5"
            onClick={() => navigate("/accomodations")}
          >
            Accomodations
          </Col>
        </Row>
        <Galllery />
      </Container>
    </Layout>
  );
}

export default index;
