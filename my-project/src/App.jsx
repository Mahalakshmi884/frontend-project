import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import EmailList from './features/emails/EmailList';
import EmailView from './features/emails/EmailView';
import Login from './features/auth/Login';
import Register from './features/auth/Register';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<EmailList />} />
          <Route path="/email/:id" element={<EmailView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
