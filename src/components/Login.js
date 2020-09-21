import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom"


const initialFormValues = {
    username:'',
    password:'',
  }


const Login = () => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const newPlace = useHistory()


    const formSubmit = (evt) => {
        evt.preventDefault()
        const user = {
          username: formValues.username.trim(),
          password: formValues.password.trim(),
        }
        console.log(user)
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
        setFormValues({ ...formValues, [name]: value })
      }

    return (
        <form onSubmit={formSubmit}>
        <div>
            <h2>Login here!</h2>
            <div>
                <label>Username:
                    <input 
                    value={formValues.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                    placeholder='Enter Username'
                    />
                </label>
                <label>Password:
                    <input 
                    value={formValues.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                    placeholder='Enter Password'
                    />
                </label>
            </div>
                <button id='loginBtn'>Login</button>
        </div>
        </form>
    )
}

export default Login
