import React, { useState } from "react";
import Layout from "../components/Layout";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Axios from "axios";

function Confession() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await Axios.post("/.netlify/functions/confessions", {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        message,
      },
    });
    console.log(data);

    setMessage("");
  };

  return (
    <Layout>
      <Container>
        <h1 className="text-center my-4">Send Confession</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="messagearea">Add your message.</Label>
            <Input
              type="textarea"
              name="message"
              id="messagearea"
              required={true}
              rows={10}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </FormGroup>
          <Button size="lg" color="info">
            Submit
          </Button>
        </Form>
      </Container>
    </Layout>
  );
}

export default Confession;
