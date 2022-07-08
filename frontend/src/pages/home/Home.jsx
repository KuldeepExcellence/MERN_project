import "./Home.css"
import { Link } from "react-router-dom"
import React from 'react'
import Widget from "../../component/widget/Widget"


 function Home() {
  return (
    <div className="home">
        <Widget/>

        <Link to="/newstudent">
            <button  className="addStudent">Add student</button>
        </Link>
    
    </div>
  )
}
export default Home
