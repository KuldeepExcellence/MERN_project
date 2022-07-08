import React from 'react'
import './SideBar.css'
import {Dashboard ,Subject , Groups, Grading} from '@mui/icons-material';
import {Link} from "react-router-dom"
export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebartitle'>DAsh</h3>
                <ul className='sidebarlist'>
                    <li className='sidebarlistitem active'>
                        <Dashboard className='sidebaricons'/>
                        Dashboard
                    </li>
                </ul>
                <h3 className='sidebartitle'>APPEARANCE</h3>
                <ul className='sidebarlist'>
                    <li className='sidebarlistitem'>
                        <Dashboard className='sidebaricons'/>
                        Student Classes
                    </li>
                    <li className='sidebarlistitem'>
                        <Subject className='sidebaricons'/>
                        Subjects
                    </li>
                    <Link to = "/students">
                    <li className='sidebarlistitem'>
                        <Groups className='sidebaricons'/>
                        students
                    </li>
                    </Link>

                    <li className='sidebarlistitem'>
                        <Grading className='sidebaricons'/>
                        Result
                    </li>
                    <li className='sidebarlistitem'>
                        <Grading className='sidebaricons'/>
                        Admin Change Password
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
 