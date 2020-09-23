import React from "react";
import styled from "styled-components";

//component styling
const StyledDiv = styled.div`
  input {
    width: 15%;
    padding: 12px 20px;
    margin: 8px 1%;
    &::placeholder{
      font-family: 'Montserrat', sans-serif;
    }
  }
  button {
    max-width: 292px;
    width: 200px;
    margin-top: 1%;
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
  }
  button:hover {
    background-color: #b3a394;
    color: #102542;
  }
  h1{
    padding:1%;
    margin:0 auto;
  }
`;

export default function SignUpForm(props) {
  const { formValues, change, submit, errors, buttonDisabled } = props;

  return (
    <StyledDiv>
      <form onSubmit={submit}>
        <h1>Create Account</h1>
        <label htmlFor="username">
          <strong>Username:</strong>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={change}
            placeholder='Enter Username'
          />
          {errors.username.length > 0 ? <p>{errors.username}</p> : null}
        </label>
        <br />
        <label htmlFor="password">
          <strong>Password:</strong>
          <input
            type="text"
            name="password"
            value={formValues.password}
            onChange={change}
            placeholder='Enter Password'
          />
          {errors.password.length > 0 ? <p>{errors.password}</p> : null}
        </label>
        <br />
        <button disabled={buttonDisabled}>Submit</button>
      </form>
    </StyledDiv>
  );
}
