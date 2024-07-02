import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import SignInForm from './components/DataDisplay/Auth/SignIn/index';
import SignUpForm from './components/DataDisplay/Auth/SignUp/index';
// import HomePage from './pages/homepage/homepage';
import Dashboard from './pages/dashboards';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        {/* <Route path="/homepage" element={<HomePage />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>

  );
}

export default App;
