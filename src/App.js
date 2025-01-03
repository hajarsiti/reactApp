import './App.css';
import LoginForm from './pages/signIn';
import SignupForm from './pages/SignUp';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/" element={<Navigate to="/signup" replace />} />
        </Routes>
      </Router>
  );
}

export default App;