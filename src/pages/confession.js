import React, { useState } from "react";
import Layout from "../components/Layout";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function Confession() {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
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
