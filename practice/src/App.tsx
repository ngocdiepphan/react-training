import React, { ReactNode } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Pages
import SignInForm from "pages/Auth/SignIn";
import SignUpForm from "pages/Auth/SignUp";
import HomePage from "pages/Homepage";
import RecipeDetail from "pages/RecipeDetail";
import Dashboard from "pages/Dashboard";

import 'App.css'

interface ProtectRoute {
  element: JSX.Element;
}

const ProtectRoute = ({ element }: ProtectRoute) => {
  // Check if the user is authenticated
  const isAuth = !!localStorage.getItem("user");

  if (!isAuth) return <Navigate to="/" />;

  return element;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Navigate to="/sign-in" />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route
          path="/homepage/*"
          element={<ProtectRoute element={<HomePage />} />}
        />
        <Route
          path="/dashboard/*"
          element={<ProtectRoute element={<Dashboard />} />}
        />
        <Route
          path="/recipe/:id"
          element={<ProtectRoute element={<RecipeDetail />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
