import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/TextField";
import Button from "../../components/Buttons";
import { validateEmail, validateMinLength } from "helpers";
import AuthenticationService from "services/auth";

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const AuthService = new AuthenticationService();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

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
      setError("Role information not found in response.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data));
    navigate(data.role === "admin" ? "/dashboard" : "/homepage");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center pt-60">
      <form
        className="bg-primary p-8 rounded-lg shadow-md mt-8 mb-64 w-420 h-420 mx-4 px-30 pt-20"
        onSubmit={handleSignIn}
      >
        <div className="mb-4">
          <InputField
            label="Email"
            type="text"
            id="email"
            name="email"
            variant="primary"
            value={formData.email}
            onChange={handleChange}
            errorMessage={errors.email || error}
          />
        </div>
        <div className="mb-4">
          <InputField
            label="Password"
            type="password"
            id="password"
            name="password"
            variant="primary"
            value={formData.password}
            onChange={handleChange}
            errorMessage={errors.password}
          />
        </div>
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
