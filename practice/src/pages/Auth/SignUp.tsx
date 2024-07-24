import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { InputField, Button } from "components";

// Helper
import {
  validateEmail,
  validateMinLength,
  validatePasswordMatch,
} from "helpers";

// Service
import AuthenticationService from "services/auth";

// Type
import { FORM_FIELDS } from "constants/index";

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  const AuthService = new AuthenticationService();

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
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    switch (name) {
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
          confirmPassword:
            validatePasswordMatch(formData.password, value) || "",
        });
        break;
      default:
        break;
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid =
      formData.email &&
      formData.username &&
      formData.password &&
      formData.confirmPassword;

    if (!isValid) {
      setErrors({
        email: !formData.email ? "Email is required" : "",
        username: !formData.username ? "Username is required" : "",
        password: !formData.password ? "Password is required" : "",
        confirmPassword: !formData.confirmPassword
          ? "Confirm Password is required"
          : "",
      });
      return;
    }

    if (
      !errors.email &&
      !errors.username &&
      !errors.password &&
      !errors.confirmPassword
    ) {
      const response = await AuthService.signUpUser(formData);
      if (response.error) {
        alert(`Sign up failed: ${response.error.message}`);
      } else {
        alert("Sign up successful!");
        navigate("/sign-in");
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center pt-12">
      <form
        className="bg-primary w-500 h-650 rounded-lg shadow-md mt-8 mb-28 mx-4 px-30 pt-20 pb-30"
        id="form-sign-up"
        onSubmit={handleSignUp}
      >
        {FORM_FIELDS.map((field) => (
          <InputField
            key={field.id}
            label={field.label}
            type={field.type}
            id={field.id}
            name={field.name}
            variant="primary"
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            errorMessage={errors[field.name as keyof typeof errors]}
          />
        ))}
        <Button type="submit" variant="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
