import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/Inputs/TextField";
import Button from "../../components/Buttons";
import { validateEmail, validateMinLength } from "helpers";
import UserService from "services/auth";

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const userService = new UserService();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });

    switch (field) {
      case "email":
        setErrors({
          ...errors,
          // email: validateEmail(value) || "",
        });
        break;
      case "password":
        setErrors({
          ...errors,
          // password: validateMinLength("Password", value, 8) || "",
        });
        break;
      default:
        break;
    }
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
    const emailError = validateEmail(formData.email);
    const passwordError = validateMinLength("Password", formData.password, 8);

    setErrors({
      email: emailError || "",
      password: passwordError || "",
    });

    if (!emailError && !passwordError) {
      const response = await userService.signInUser(
        formData.email,
        formData.password,
      );

      if (response.error) {
        setError("Invalid email or password. Please try again.");
      } else if (response.data && "role" in response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));

        if (response.data.role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/homepage");
        }
      }
    }
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
            onChange={(e) => handleChange("email", e.target.value)}
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
            onChange={(e) => handleChange("password", e.target.value)}
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
