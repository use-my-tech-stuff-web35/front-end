import * as yup from "yup";

//schema for SignUpForm
export default yup.object().shape({
  username: yup
    .string()
    .test(
      "length",
      "Enter a username that is longer than 2 Characters",
      (value) => value.length > 2
    ),
  password: yup
    .string()
    .test(
      "length",
      "You're password must be 4 characters or more",
      (value) => value.length >= 4
    ),
});