import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import Layout from "../components/Layout";
import Axios from "axios";
import axios from "axios";

function allconfessions() {
  const [confessions, setConfessions] = useState([]);
  useEffect(() => {
    const { data } = axios.get("/.netlify/functions/confessions");
  }, []);
  return (
    <Layout>
      <Container></Container>
    </Layout>
  );
}

export default allconfessions;
