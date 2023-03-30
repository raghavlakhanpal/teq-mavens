import { useState } from "react";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          placeholder="Enter your Email"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          placeholder="Enter your Password"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default Login;
