import Topbar from "./component/Topbar/Topbar";
import React from 'react';
import SideBar from "./component/sideBar/SideBar";
import './App.css';
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./pages/studentList/StudentList";
import NewStudent from "./pages/newStudent/NewStudent";
import AdminDash from "./AdminDash";
import Login from "./component/login/Login";
import Student from "./pages/student/Student"
import axios from "axios";
import { useState, useEffect } from "react";
import StudentDetails from "./pages/detail/studentDetails";

function App() {
  const [students, setStudents] = useState()

  let userData;


  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then(res => {

        userData = res.data;
        console.log('userData', userData);
        setStudents(userData);
      })
      .catch(error => console.log(error));
  }, [])

  if (students === undefined) {

    return null;
  }
  else {

    // console.log(students)

  }

  // alert(students[0].name)


  return (
    <BrowserRouter>
      {/* <h1>{students}</h1> */}


      <Topbar />
      <div className="container">

        <SideBar />
        {/* <div className="routeContainer"> */}
        <Routes>

          <Route exact path="/" element={<Login />} />

          <Route exact path="/home" element={<Home />} />


          <Route path="/students" element={<StudentList students={students} key={students.name} />} />
          <Route path="/update/:id" element={<Student students={students} />} />
          <Route path="/details/:id" element={<StudentDetails students={students} />} />

          <Route exact path="/newstudent" element={<NewStudent />} />

        </Routes>
        {/* <div className="other"><h1>DATA</h1>
            {students.map(stud => <div>{stud.name} this is from app</div>)}
          </div> */}
      </div>
      {/* </div> */}
    </BrowserRouter>

  );
}

export default App;
