/* import axios from "axios";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import SignUpForm from "./SingUpForm"
import formSchema from "./formSchema";

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

        // setSavedFormInfo(res.data);
      })
      .catch((error) => {
        console.log("axios error", error);
      });
  };
  const { username, password, id, createdAt } = post;

  return (
    <div>
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
} */