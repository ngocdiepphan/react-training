import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../../Inputs/TextField";
import Button from "../../../Inputs/Buttons";
import { validateEmail, validateMinLength, validatePasswordMatch } from "helpers";
import UserService from "services/auth";

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const userService = new UserService();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    role: "",
    img: "",
    id: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    switch (field) {
      case "email":
        setErrors({
          ...errors,
          email: validateEmail(value) || "",
        });
        break;
      case "username":
        setErrors({
          ...errors,
          username: validateMinLength("Username", value, 2) || "",
        });
        break;
      case "password":
        setErrors({
          ...errors,
          password: validateMinLength("Password", value, 8) || "",
        });
        break;
      case "confirmPassword":
        setErrors({
          ...errors,
          confirmPassword: validatePasswordMatch(formData.password, value) || "",
        });
        break;
      default:
        break;
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    const emailError = validateEmail(formData.email);
    const usernameError = validateMinLength("Username", formData.username, 2);
    const passwordError = validateMinLength("Password", formData.password, 8);
    const confirmPasswordError = validatePasswordMatch(formData.password, formData.confirmPassword);

    setErrors({
      email: emailError || "",
      username: usernameError || "",
      password: passwordError || "",
      confirmPassword: confirmPasswordError || "",
    });

    if (!emailError && !usernameError && !passwordError && !confirmPasswordError) {
      // Proceed with sign up
      const response = await userService.signUpUser(formData);

      if (response.error) {
        alert(`Sign up failed: ${response.error.message}`);
      } else {
        alert("Sign up successful!");
        navigate('/sign-in');
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center pt-50">
      <form
        className="bg-primary w-500 rounded-lg shadow-md mt-8 mb-28 h-650 mx-4 px-30 pt-20"
        id="form-sign-up"
        onSubmit={handleSignUp}
      >
        <InputField
          label="Email"
          type="text"
          id="email"
          name="email"
          variant="primary"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          errorMessage={errors.email}
        />
        <InputField
          label="Username"
          type="text"
          id="username"
          name="username"
          variant="primary"
          value={formData.username}
          onChange={(e) => handleChange("username", e.target.value)}
          errorMessage={errors.username}
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          name="password"
          variant="primary"
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
          errorMessage={errors.password}
        />
        <InputField
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          variant="primary"
          value={formData.confirmPassword}
          onChange={(e) => handleChange("confirmPassword", e.target.value)}
          errorMessage={errors.confirmPassword}
        />
        <Button type="submit" variant="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
