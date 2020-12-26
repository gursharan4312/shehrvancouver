import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";
import Axios from "axios";

function Confession() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    setSuccess(false);
    try {
      await Axios.post("/.netlify/functions/confessions", {
        message,
      });
      setSuccess(true);
    } catch (e) {
      setError(true);
    }
    setSending(false);
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
          <div className="d-flex justify-content-start align-items-center">
            <Button size="lg" color="info">
              Submit
              {sending && (
                <div className="lds-facebook">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
            </Button>
            {success && (
              <Alert color="success" className="m-2 flex-grow-1">
                Message sent
              </Alert>
            )}
            {error && (
              <Alert color="danger" className="m-2 flex-grow-1">
                Something went wrong please try again later
              </Alert>
            )}
          </div>
        </Form>
      </Container>
    </Layout>
  );
}

export default Confession;
