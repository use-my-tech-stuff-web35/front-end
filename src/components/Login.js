import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"
import formSchema from "./formSchema"
import * as yup from "yup"
import styled from 'styled-components'


const initialFormValues = {
    username:'',
    password:'',
  }

  const initialErrors = {
    username: '',
    password: '',
  }; 

  const StyledDiv = styled.div`
  background-image:url('https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80');
  background-size:cover;
  background-position:center;
  height:1000px;
  background-repeat: no-repeat;
  input{
      width:15%;
      padding:12px 20px;
      margin:8px 1%;
  }
  button {
    max-width: 292px;
    width: 200px;
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
  `

const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(true);

    const newPlace = useHistory()


    const formSubmit = (evt) => {
        evt.preventDefault()
        const user = {
          username: formValues.username.trim(),
          password: formValues.password.trim(),
        }
        axios.post('https://used-tech.herokuapp.com/api/auth/login', user)
        .then(res => {
          newPlace.push("/techlist")
          setFormValues(initialFormValues)
        })
        .catch(err => {
          console.log(err)
        })
      }

      const onChange = (evt) => {
        const { name, value }= evt.target
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
        <form onSubmit={formSubmit}>
        <StyledDiv>
            <h1>Login here!</h1>
                <div>
                <label><strong>Username:</strong>
                    <input 
                    value={formValues.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                    placeholder='Enter Username'
                    />
                </label>
                </div>
                <div>
                <label><strong>Password:</strong>
                    <input 
                    value={formValues.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                    placeholder='Enter Password'
                    />
                </label>
                </div>
                <div>
                {errors.username}
                {errors.password}
                </div>
                <button id='loginBtn' disabled={disabled}>Login</button>
        </StyledDiv>
        </form>
    )
}

export default Login
