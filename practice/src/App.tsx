import React from "react";
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

import "App.css";

interface ProtectRouteProps {
  element: JSX.Element;
  role: "admin" | "user";
}

const ProtectRoute = ({ element, role }: ProtectRouteProps) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!user || !user.role) {
    return <Navigate to="/sign-in" />;
  }

  if (user.role !== role) {
    return <Navigate to={user.role === "admin" ? "/dashboard" : "/homepage"} />;
  }

  return element;
};

const AuthRoute = ({ element }: { element: JSX.Element }) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (user && user.role) {
    return <Navigate to={user.role === "admin" ? "/dashboard" : "/homepage"} />;
  }

  return element;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Navigate to="/sign-in" />} />
        <Route
          path="/sign-in"
          element={<AuthRoute element={<SignInForm />} />}
        />
        <Route
          path="/sign-up"
          element={<AuthRoute element={<SignUpForm />} />}
        />
        <Route
          path="/homepage/*"
          element={<ProtectRoute element={<HomePage />} role="user" />}
        />
        <Route
          path="/dashboard/*"
          element={<ProtectRoute element={<Dashboard />} role="admin" />}
        />
        <Route
          path="/recipe/:id/*"
          element={<ProtectRoute element={<RecipeDetail />} role="user" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
