import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../../firebase";
import styled from "styled-components";
import Background from "../Assests/Background.gif";
const SignUp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      setCurrentUser(true);
    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <Signup>
      <FormTitle>Sign Up</FormTitle>
      <Form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Email" />
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </Form>
    </Signup>
  );
};

const Signup = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${Background});
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-position: center;
  background-size: cover;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  > label {
    margin: 20px 0;
    align-self: start;
  }

  > input {
    color: white;
    height: 40px !important;
    width: 250px;
    border: 1px solid lightgrey;
    background: transparent;
    text-align: left;

    ::placeholder {
      padding: 20px;
    }
  }

  > button {
    background: transparent;
    color: white;
    padding: 15px;
    width: 100%;
    border: 1 px solid lightgrey;
    border-radius: 2px;
    cursor: pointer;
    margin-top: 30px;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  font-weight: 400;
`;

export default SignUp;
