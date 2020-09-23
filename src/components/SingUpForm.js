import React from "react";
import styled from "styled-components";

//component styling
const StyledDiv = styled.div`
  background-image: url("https://images.unsplash.com/photo-1505424297051-c3ad50b055ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80");
  background-size: cover;
  background-position: center;
  height: 1000px;
  background-repeat: no-repeat;
  input {
    width: 15%;
    padding: 12px 20px;
    margin: 8px 1%;
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
`;

export default function SignUpForm(props) {
  const { formValues, change, submit, errors, buttonDisabled } = props;

  return (
    <StyledDiv>
      <form onSubmit={submit}>
        <h2>Create Account</h2>
        <label htmlFor="username">
          <strong>Username:</strong>
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={change}
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
          />
          {errors.password.length > 0 ? <p>{errors.password}</p> : null}
        </label>
        <br />
        <button disabled={buttonDisabled}>Submit</button>
      </form>
    </StyledDiv>
  );
}
