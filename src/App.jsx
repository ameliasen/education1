import React from "react";
import { Routes, Route } from "react-router-dom"; 
import "./App.css";

// Components
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";

// Pages
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Courses from "./pages/Course/Course";
import Account from "./pages/Account/Account";
import CourseDescription from "./pages/Coursedescription/Coursedescription";
import PaymentSuccess from "./pages/PaymentSucess/PaymentSucess";
import CourseStudy from "./pages/CourseStudy/CourseStudy";
import Lecture from "./pages/Lecture/Lecture";
import AdminDashboard from "./pages/admin/AdminDashboard/AdminDashboard";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
// import ForgotPassword from "./pages/auth/ForgotPassword";
// import ResetPassword from "./pages/auth/ResetPassword";
import AdminCourses from "./pages/admin/Courses/AdminCourses"; 
import ProtectedRoutes from "./ProtectedRoutes";
import AdminUser from "./pages/admin/Users/AdminUser";
import Layout from './pages/admin/Utils/Layout';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={
            <About/>
          } />
        <Route path="/Course" element={
          
            <Courses />
         
        } />        
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        {/* <Route path="/forgot" element={<ForgotPassword />} /> */}
        {/* <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
        <Route path="/account" element={<Account />} />
        <Route path="/Coursedescription" element={
           
          <CourseDescription />
          } />
        <Route path="/payment-success/:id" element={<PaymentSuccess />} />
        <Route path="/CourseStudy" element={
           <ProtectedRoutes>
          <CourseStudy />
          
          </ProtectedRoutes>
          
          } />
        <Route path="/lectures/:id" element={<Lecture />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
<Route path="/AdminCourses" element={<AdminCourses />} />
<Route path="/Layout" element={<Layout />} />
<Route path="/AdminUser" element={<AdminUser />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
