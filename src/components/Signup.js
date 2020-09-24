/* import React from 'react';
import {connect} from 'react-redux';
import {signUp} from '../actions';
import styled from 'styled-components';

const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
height: 800px;
width: 400px;
margin: auto;

p {
  text-align: center;
}
`

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
input {
  width: 380px;
  height: 50px;
  margin: 10px 0;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 18px;
  outline: none;
  background-color: rgb(232, 240, 254)
}
button {
  height: 50px;
  width: 380px;
  margin: 10px 0 10px 10px;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  color: white;
  background-color: blueviolet;
  cursor: pointer;
}
`

class Signup extends React.Component {
  state = {
    user: {
      username: "",
      password: "",
    }
    
  };

  handleSignupChange = e => {
    
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  submitSignUp = e => {
    e.preventDefault();
    this.props.signUp(this.state.user)
    .then(() => this.props.history.push('/items'))
  };

  render() {
    return (
      <FormContainer>

        <Form onSubmit={this.submitSignUp}>
           
            
            <label>
                Username
                <input
                    type="text"
                    name="username"
                    value={this.state.user.username}
                    onChange={this.handleSignupChange}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    value={this.state.user.password}
                    onChange={this.handleSignupChange}
                />
            </label>
           
            <button>{this.props.signingUp ? "Loading" : "SignUp"}</button>
        </Form>
      </FormContainer>
    );
  }
}

const mapStateToProps = ({ signingUp }) => ({
    signingUp
  });
  
  export default connect(
    mapStateToProps,
    { signUp }
  )(Signup); */


import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import * as yup from "yup";
import SignUpForm from "./SingUpForm"
import formSchema from "./formSchema";
import Navigation from './Navigation'

//form defaults
const formDefaults = {
  username: "",
  password: "",
};

//error defaults
const defaultErrors = {
  username: "",
  password: "",
}; 

export default function SignUpFormComponent() {
    const history = useHistory()
  //states

  //form values
  const [formValues, setFormValues] = useState(formDefaults);
  //storing values from the form
  //   const [savedFormInfo, setSavedFormInfo] = useState([]);
  //state for errors
  const [errors, setErrors] = useState(defaultErrors);
  //state for disabling button
  const [buttonDisabled, setButtonDisabled] = useState(true);
  //state to verify Post worked
  const [post, setPost] = useState([]);
  //state for button visibility
  const [btnVis, setBtnVis] = useState("hidden");

  //function for handling the onChange inside of the form

  const change = (event) => {
    //making the event target into something more useable
    const { name, value } = event.target;
    //validate against the schema
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((error) => {
        setErrors({ ...errors, [name]: error.errors[0] });
      });
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formValues]);

  const submit = (event) => {
    event.preventDefault();
    // console.log("working properly");
    axios
      .post("https://used-tech.herokuapp.com/api/auth/register", formValues)
      .then((res) => {
        setPost(res.data);
        console.log(formValues);
        setFormValues(formDefaults);
        history.push('/items')
        // setSavedFormInfo(res.data);
      })
      .catch((error) => {
        console.log("axios error", error);
      });
  };

  return (
    <div>
        <Navigation />
      <SignUpForm
        formValues={formValues}
        change={change}
        submit={submit}
        errors={errors}
        buttonDisabled={buttonDisabled}
        btnVis={btnVis}
        setBtnVis={setBtnVis}
      />
    </div>
  );
}