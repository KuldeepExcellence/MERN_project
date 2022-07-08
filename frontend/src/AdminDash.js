import Topbar from "./component/Topbar/Topbar";
import React from 'react';
import SideBar from "./component/sideBar/SideBar";
import './App.css';
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./pages/studentList/StudentList";
import NewStudent from "./pages/newStudent/NewStudent";
import Login from "./component/login/Login";
function AdminDash() {
  return (
    <BrowserRouter>

      <Topbar />
      <div className="container">
        <SideBar />
        <Routes>


          <Route exact path="/" element={<Home />} />


          <Route path="/students" element={<StudentList />} />

          <Route exact path="/newstudent" element={<NewStudent />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AdminDash;
