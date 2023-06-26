import Header from "../../components/Header";
import SignUpForm from "../../components/forms/SingUpForm";
import React from "react";
import { SIGN_UP_SCHEMA } from "../../utils/validationSchemas";

// const SIGN_UP_SCHEMA = yup.object({
//   email: yup.string().email().required(),
//   password: yup
//     .string()
//     .matches(/^(?=.{0,}[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!#$%^&*]).{8,32}$/)
//     .required(),
//   firsName: yup
//     .string()
//     .matches(/^[A-Z][a-z]{1,16}$/)
//     .required(),
//   lastName: yup
//     .string()
//     .matches(/^[A-Z][a-z]{1,16}$/)
//     .required(),
// });

const user1 = {
  firstName: "Test",
  lastName: "User",
  password: "1234EDA4%df",
  email: "test@test.test",
};

const user2={
  firstName: "",
  lastName: "",
  password: "%",
  email: "",
};

function SignUpPage() {
  return (
    <>
      <Header />
      <main>
        <h1>Sign up now!</h1>
        <SignUpForm />
      </main>
    </>
  );
}

export default SignUpPage;
