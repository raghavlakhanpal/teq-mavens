//---------------------Imports----------------------//
//react
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Toast,
  ToastBody,
  ToastHeader,
} from "reactstrap";

//helpers
import "../styles/login.css";
import { validateEmail, validatePassword } from "../helpers/validation";

//redux
import { loginUser } from "../actions";
import { useDispatch, useSelector } from "react-redux";

//---------------------Helper Component----------------------//
const FormInput = ({
  type,
  handleChange,
  errors,
  handleEmailErrors,
  handlePasswordErrors,
}) => {
  let name = type === "email" ? "Email" : "Password";

  return (
    <FormGroup className="column">
      <Label>{name}</Label>
      <Input
        autoComplete="off"
        style={{ borderColor: errors ? "red" : "" }}
        placeholder={`Enter your ${name}`}
        type={type}
        name={type}
        onChange={handleChange}
        onBlur={type === "email" ? handleEmailErrors : handlePasswordErrors}
      />
      <FormFeedback style={{ color: "red" }}>{errors || null}</FormFeedback>
    </FormGroup>
  );
};

//---------------------Main Component----------------------//
const Login = () => {
  //states
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [toastVisibility, setToastVisibility] = useState(false);
  const [toastError, setToastError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginError = useSelector((state) => state.error);

  //use Effect
  useEffect(() => {
    if (formErrors.email === "" && formErrors.password === "") {
      setToastVisibility(false);
    }
  }, [loginError, formErrors]);

  //handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //---------------------Handle Validation----------------------//
  const handleEmailErrors = (email) => {
    const result = validateEmail(email);
    if (!(result === "")) {
      setFormErrors((prevErrState) => ({ ...prevErrState, email: result }));
    } else {
      setFormErrors((prevErrState) => ({ ...prevErrState, email: "" }));
    }
  };
  const handlePasswordErrors = (password) => {
    const result = validatePassword(password);
    if (!(result === "")) {
      setFormErrors((prevErrState) => ({ ...prevErrState, password: result }));
    } else {
      setFormErrors((prevErrState) => ({ ...prevErrState, password: "" }));
    }
  };

  //---------------------form submission----------------------//
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formErrors.email === "" && formErrors.password === "") {
      await dispatch(
        loginUser({
          email: formState.email,
          password: formState.password,
        })
      );
      if (loginError) {
        setToastError(loginError);
        setToastVisibility(true);
      } else {
        navigate("/dashboard");
      }
    } else {
      dispatch({ type: "LOGIN_ERROR", payload: "Invalid input" });
      setToastError("Invalid input");
      setToastVisibility(true);
    }
  };

  //debugging commands
  // console.log(FormErrors,FormState);

  //----------JSX-----------//
  return (
    <Form
      onSubmit={handleSubmit}
      autoComplete="off"
      autoCorrect="off"
      className="form"
      noValidate
    >
      <h1>Login</h1>
      <div className="form-elements">
        <FormInput
          type="email"
          handleChange={handleChange}
          handleEmailErrors={(e) => handleEmailErrors(e.target.value)}
          errors={formErrors.email}
        />

        <FormInput
          type="password"
          handleChange={handleChange}
          handlePasswordErrors={(e) => handlePasswordErrors(e.target.value)}
          errors={formErrors.password}
        />

        <div className="button-submit">
          <Button
            type="submit"
            disabled={formState.email === "" || formState.password === ""}
          >
            Submit
          </Button>
        </div>
      </div>
      <Toast
        isOpen={toastVisibility}
        style={{ color: "red", textAlign: "center" }}
      >
        <ToastHeader>Error</ToastHeader>
        <ToastBody>{toastError}</ToastBody>
      </Toast>
    </Form>
  );
};
export default Login;
