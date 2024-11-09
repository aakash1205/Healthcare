import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminLogin from './pages/Login/AdminLogin';
import DoctorLogin from './pages/Login/DoctorLogin';
import PatientLogin from './pages/Login/PatientLogin';
import AdminSignup from './pages/Signup/AdminSignup';
import PatientSignup from './pages/Signup/PatientSignup';
import DoctorSignup from './pages/Signup/DoctorSignup';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import DoctorDashboard from './pages/Dashboard/DoctorDashboard';
import PatientDashboard from './pages/Dashboard/PatientDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/admin" element={<AdminLogin />} />
      <Route path="/login/doctor" element={<DoctorLogin />} />
      <Route path="/login/patient" element={<PatientLogin />} />
      <Route path="/signup/admin" element={<AdminSignup />} />
      <Route path="/signup/doctor" element={<DoctorSignup />} />
      <Route path="/signup/patient" element={<PatientSignup />} />
      <Route path="/dashboard/admin" element={<AdminDashboard />} />
      <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
      <Route path="/dashboard/patient" element={<PatientDashboard />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
