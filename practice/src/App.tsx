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
import HomePage from "pages/homepage";
import RecipeDetail from "pages/RecipeDetail";
import Dashboard from "pages/dashboard";

const useAuth = () => {
  const token = localStorage.getItem("authToken");
  return { isAuthenticated: !!token };
};

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      {!isAuthenticated ? (
        <Routes>
          <Route path="/" index element={<Navigate to="/sign-in" />} />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/homepage" index element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
