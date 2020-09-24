/* import React from 'react';
import {connect} from 'react-redux';
import {signIn} from '../actions';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


class SignIn extends React.Component {
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
    { signIn }
  )(SignIn);

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