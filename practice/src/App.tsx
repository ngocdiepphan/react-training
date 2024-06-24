import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import SignInForm from './components/DataDisplay/Authen/SignIn/SignIn';
import SignUpForm from './components/DataDisplay/Authen/SignUp/SignUp';
import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>

  );
}

export default App;
