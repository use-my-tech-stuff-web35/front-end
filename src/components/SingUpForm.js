import React from "react";

export default function SignUpForm(props) {
  const { formValues, change, submit, errors, buttonDisabled } = props;

  return (
    <div>
      <form onSubmit={submit}>
        <h2>Create Account</h2>
        <label htmlFor="username">
          Username:
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
          Password:
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
    </div>
  );
}