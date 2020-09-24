import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, Link } from "react-router-dom"
import formSchema from "./formSchema"
import * as yup from "yup"
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import '../App.css'

const initialFormValues = {
    username: '',
    password: '',
}

const initialErrors = {
    username: '',
    password: '',
};

const StyledDiv = styled.div`
        height:auto;
        padding-top:15rem;

  input{
      width:80%;
      padding:12px 20px;
      margin:8px 1%;
      &::placeholder{
        font-family: 'Montserrat', sans-serif;
      }
  }
  button {
    max-width: 292px;
    width: 200px;
    margin:0 0.5%;
    margin-bottom: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 2px solid #fff;
    border-radius: 5px;
    background-color: #102542;
    transition: color 0.2s ease, background-color 0.2s ease;
    font-family: Inter, sans-serif;
    cursor: pointer;
    color: #f87060;
    font-size: 18px;
    line-height: 160%;
    font-weight: 700;
    text-decoration: none;
    margin-top:1%;
  }
  button:hover {
    background-color: #b3a394;
    color: #102542;
  }
  h1{
      padding:1%;
      margin:0 auto;
  }
  .wrapper{
      font-size:1.5rem;
      display:flex;
      justify-content:space-around;
      margin:0 1%;
      flex-direction:column;
  }
  .wrapper-two{
      display:flex;
      flex-direction:column;
  }
  .container{
      display:flex;
      justify-content:center;
  }
  `


const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(true);
    const newPlace = useHistory();


    const formSubmit = (evt) => {
        evt.preventDefault()
        const user = {
            username: formValues.username.trim(),
            password: formValues.password.trim(),
        }
        axios.post('https://used-tech.herokuapp.com/api/auth/login', user)
            .then(res => {
                newPlace.push("/items")
                setFormValues(initialFormValues)
            })
        axiosWithAuth().post('/auth/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                newPlace.push('/items');
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onChange = (evt) => {
        const { name, value } = evt.target
        validate(name, value);
        setFormValues({ ...formValues, [name]: value })
    }

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
            setDisabled(!valid);
        });
    }, [formValues]);

    return (
        <form className='form' onSubmit={formSubmit}>
            <StyledDiv>
                <h1>Sign In Here!</h1>
                <div className='container'>
                    <div className='wrapper'>
                        <label><strong>Username:</strong></label>
                        <label><strong>Password:</strong></label>

                    </div>
                    <div className='wrapper-two'>
                        <input
                            value={formValues.username}
                            onChange={onChange}
                            name='username'
                            type='text'
                            placeholder='Enter Username'
                        />
                        <input
                            value={formValues.password}
                            onChange={onChange}
                            name='password'
                            type='password'
                            placeholder='Enter Password'
                        />
                    </div>
                </div>
                <div>
                    {errors.username}
                    {errors.password}
                </div>
                <button id='loginBtn' disabled={disabled}>Sign In</button>
                <Link to="/register">
                    <button>Sign Up</button>
                </Link>
            </StyledDiv>
        </form>
    )
}

export default Login


/*


import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };


  handleChange = e => {

    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
    .then(() => this.props.history.push('/items'))
  };



  render() {
    return (
      <FormContainer>
        <Form onSubmit={this.login}>
            <label>
                Username

                <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
            </label>
            <button>{this.props.loggingIn ? "Loading" : "Login"}</button>


            <Link to="/register">
                <button>Register</button>
            </Link>

        </Form>
      </FormContainer>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
    error,
    loggingIn
  });

  export default connect(
    mapStateToProps,
    { login }
  )(Login);

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
  }
  button {
    height: 50px;
    width: 380px;
    margin: 10px;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: blueviolet;
    cursor: pointer;
  }
` */