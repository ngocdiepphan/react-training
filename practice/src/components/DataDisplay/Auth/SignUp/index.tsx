import React, { useState } from "react";
import InputField from "../../../Inputs/TextField";
import Button from "../../../Inputs/Buttons/Submit";

const SignUpForm: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-md mt-8 mb-28 w-80 md:w-96 lg:w-120 mx-4 h-512px"
        id="form-sign-up"
      >
        <InputField label="Email" type="text" id="email" name="email" />
        <InputField
          label="Username"
          type="text"
          id="username"
          name="username"
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
        />
        <InputField
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
