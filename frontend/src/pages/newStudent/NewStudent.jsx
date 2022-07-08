import React from 'react'
import "./NewStudent.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function NewStudent() {


    const [name, setName] = useState("");
    //   const [studImagee, setStudImagee] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [eId, setEId] = useState("");
    const [sDate, setsDate] = useState("");
    const [eDate, seteDate] = useState("");
    // const [deg, setDeg] = useState("");
    // const [mark1, setMark1] = useState("");
    // const [mark2, setMark2] = useState("");
    // const [mark3, setMark3] = useState("");


    // const [data, setData] = useState({
    //     name: '',
    //     fatherName: '',
    //     eId: '',
    //     sDate: '',
    //     eDate: '',
    //     Studimg: ''


    // });

    // const [record, setRecord] = useState([]);
    // const imageUpload = (e) => {
    //     console.log(e.target.files[0])
    //     setData({ ...data, Studimg: e.target.files[0] })
    // }
    // const formData = new FormData;
    // formData.append('Studimg', data.Studimg)
    // formData.append('fatherName', data.fatherName)
    // formData.append('eId', data.eId)
    // formData.append('sDate', data.sDate)
    // formData.append('eDate', data.eDate)
    // formData.append('name', data.name)


    // const handleInput = (e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     console.log(name, value)

    //     setData({ ...data, [name]: value })
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newRecord = { ...data, id: new Date().getTime().toString() }
    //     console.log(record)
    //     setRecord([...record, newRecord])
    //     console.log(record)
    // }



    // const onFileChange = (e) => {
    //     setStudImagee(e.target.files[0]);
    // }
    // const onDegreeChange = (e) => {

    //     setDeg(e.target.files[0]);
    // }
    // const onmark1Change = (e) => {

    //     setMark1(e.target.files[0]);
    // }
    // const onmark2Change = (e) => {

    //     setMark2(e.target.files[0]);
    // }
    // const onmark3Change = (e) => {

    //     setMark3(e.target.files[0]);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const data = {
        //     name,
        //     fatherName,
        //     eId,
        //     sDate,
        //     eDate
        // }
        const formData = new FormData();
        formData.append('name', name)
        formData.append('fatherName', fatherName)
        formData.append('eId', eId)
        formData.append('sDate', sDate)
        formData.append('eDate', eDate)
        // formData.append('studImage', studImagee)
        // formData.append('degree', deg)
        // formData.append('marksheet1', mark1)
        // formData.append('marksheet2', mark2)
        // formData.append('marksheet3', mark3)


        axios.post("http://localhost:5000/students/addstudent", formData

            // {
            //     headers: { 'ACCEPT': 'application/json' }
            // }
        )
            .then(function (response) {
                console.log(response)
                alert(response.data.message)
            })
    }


    return (
        <div className='newstudent'>
            Add Student info
            <h1>New Student</h1>
            <form className='newUserForm' encType='multipart/form-data' onSubmit={handleSubmit}>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" id="name"
                        name="name"
                        onChange={e => { setName(e.target.value) }}
                        placeholder='John doe' />
                </div>
                <div className="newUserItem">
                    <label>Father Name</label>

                    <input type="text" id="fatherName"
                        name="fatherName"
                        onChange={e => { setFatherName(e.target.value) }}
                        placeholder='Father NAme' />
                </div>
                <div className="newUserItem">
                    <label>Enrollment Id</label>
                    <input type="text" id="eId"
                        name="eId"
                        onChange={e => { setEId(e.target.value) }}
                        placeholder='1230452' />
                </div>
                <div className="newUserItem">
                    <label>starts on</label>
                    <input type="date" id="sDate"
                        name="sDate"
                        onChange={e => { setsDate(e.target.value) }} />
                </div>
                <div className="newUserItem">
                    <label>ends on</label>
                    <input type="date" id="eDate" name="eDate"

                        onChange={e => { seteDate(e.target.value) }} />
                </div>
                {/* <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name='gender' id='male' value='male' />
                        <label htmlFor='male'>Male</label>
                        <input type="radio" name='gender' id='female' value='female' />
                        <label htmlFor='female'>Female</label>
                        <input type="radio" name='gender' id='other' value='other' />
                        <label htmlFor='other'>Other</label>
                    </div>
                </div> */}
                {/* <div className="newUserItem">
                    <label>Student Image</label>
                    <input type="file"
                        placeholder='John doe'
                        name="studImage"
                        onChange={onFileChange} />
                </div>
                <div className="newUserItem">
                    <label>Upload Degree</label>
                    <input
                        type="file"
                        name="degree"
                        onChange={onDegreeChange}
                        placeholder='John doe' />
                </div>
                <div className="newUserItem">
                    <label>Marksheet 1</label>
                    <input type="file"
                        name="marksheet1"
                        onChange={onmark1Change}
                        placeholder='John doe' />
                </div>
                <div className="newUserItem">
                    <label>MarkSheet2</label>
                    <input type="file"
                        name="marksheet2"
                        onChange={onmark2Change}
                        placeholder='John doe' />
                </div>
                <div className="newUserItem">
                    <label>MarkSheet3</label>
                    <input type="file"
                        name="marksheet3"
                        onChange={onmark3Change}
                        placeholder='John doe' />
                </div> */}
                <button type="submit">Submit</button>
                <Link to="/">
                    <button>Back</button>
                </Link>

            </form>
        </div>
    )
}
