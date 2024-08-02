import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import { InputField, Button } from "components";

// Helper
import { validateEmail, validateMinLength } from "helpers";

// Service
import AuthenticationService from "services/auth";
import { FORM_SIGN_IN } from "constants/form";

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const AuthService = new AuthenticationService();

  // State to hold form data and validation errors
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate input based on the field name
    switch (name) {
      case "email":
        setErrors({
          ...errors,
          email: validateEmail(value) || "",
        });
        break;
      case "password":
        setErrors({
          ...errors,
          password: validateMinLength("Password", value, 8) || "",
        });
        break;
      default:
        break;
    }
  };

  // Handle form submission
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = formData.email && formData.password;

    if (!isValid) {
      setErrors({
        email: !formData.email ? "Email is required" : "",
        password: !formData.password ? "Password is required" : "",
      });
      return;
    }

    const response = await AuthService.signInUser(
      formData.email,
      formData.password,
    );
    const data = response.data;

    if (!data || !("role" in data)) {
      setError("Email or password is invalid");
      return;
    }

    // Store user information in localStorage
    localStorage.setItem("user", JSON.stringify(data));
    // Navigate based on the user's role
    navigate(data.role === "admin" ? "/dashboard" : "/homepage");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center pt-60">
      <form
        className="bg-primary p-8 rounded-lg shadow-md mt-8 mb-64 w-420 h-420 mx-4 px-30 pt-20"
        onSubmit={handleSignIn}
      >
         {FORM_SIGN_IN.map((field) => (
        <div className="mb-4 h-110">
          <InputField
            label={field.label}
            type={field.type}
            name={field.name}
            variant="primary"
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            placeholder={field.placeholder}
            errorMessage={errors[field.name as keyof typeof errors]}
          />
        </div>
      ))}
        <Button type="submit" variant="submit">
          Sign In
        </Button>
        <div id="display-data"></div>
        <Link
          to="/sign-up"
          className="block text-center mt-6 text-teal-500 font-semibold hover:underline"
        >
          Create New Account
        </Link>
      </form>
    </div>
  );
};

export default SignInForm;
