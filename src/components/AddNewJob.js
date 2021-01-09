import React, { useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";

function AddNewJob({
  addJob,
  editJob,
  toggleAddNewJob,
  jobDetails = {
    name: "",
    pay: "",
    location: "",
    email: "",
    phoneNumber: "",
    description: "",
  },
}) {
  const [name, setName] = useState(jobDetails.name);
  const [pay, setPay] = useState(jobDetails.pay);
  const [location, setLocation] = useState(jobDetails.location);
  const [email, setEmail] = useState(jobDetails.email);
  const [phoneNumber, setPhoneNumber] = useState(jobDetails.phoneNumber);
  const [description, setDescription] = useState(jobDetails.description);
  const submit = (e) => {
    e.preventDefault();
    if (jobDetails._id !== "") {
      editJob({
        _id: jobDetails._id,
        name,
        pay,
        location,
        email,
        phoneNumber,
        description,
      });
    } else {
      addJob({
        name,
        pay,
        location,
        email,
        phoneNumber,
        description,
      });
    }
  };
  return (
    <Container className="jobdetails_container">
      <Button onClick={toggleAddNewJob}>back</Button>
      <Form onSubmit={submit}>
        <FormGroup>
          <Label for="jobName">Job Name:</Label>
          <Input
            type="text"
            name="name"
            id="jobName"
            placeholder="Enter Job Name here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="payRate">Pay Rate (optional):</Label>
          <Input
            type="number"
            name="pay"
            id="payRate"
            value={pay}
            onChange={(e) => setPay(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location (optional):</Label>
          <Input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email (optional):</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phoneNumber">Phone Number (optional):</Label>
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="jobDescription">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="jobDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <Button color="info">Submit</Button>
      </Form>
    </Container>
  );
}

export default AddNewJob;
