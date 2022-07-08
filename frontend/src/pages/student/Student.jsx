import React from 'react'
import "./student.css"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function Student() {
  const params = useParams();


  const [name, setName] = useState("");
  const [studImagee, setStudImagee] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [eId, setEId] = useState("");
  const [sDate, setsDate] = useState("");
  const [eDate, seteDate] = useState("");
  const [deg, setDeg] = useState("");
  const [mark1, setMark1] = useState("");
  const [mark2, setMark2] = useState("");
  const [mark3, setMark3] = useState("");




  const onFileChange = (e) => {
    setStudImagee(e.target.files[0]);
  }
  const onDegreeChange = (e) => {

    setDeg(e.target.files[0]);
  }
  const onmark1Change = (e) => {

    setMark1(e.target.files[0]);
  }
  const onmark2Change = (e) => {

    setMark2(e.target.files[0]);
  }
  const onmark3Change = (e) => {

    setMark3(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name)
    formData.append('fatherName', fatherName)
    formData.append('eId', eId)
    formData.append('sDate', sDate)
    formData.append('eDate', eDate)
    formData.append('studImage', studImagee)
    formData.append('degree', deg)
    formData.append('marksheet1', mark1)
    formData.append('marksheet2', mark2)
    formData.append('marksheet3', mark3)


    axios.put(`http://localhost:5000/update/${params.id}`
      , formData
    )
      .then(function (response) {
        console.log(response)
        alert(response.data)
      })
      .catch(err => { console.log(err) })
  }




  useEffect(() => {
    axios.get(`/details/${params.id}`)
      .then(res =>

        [
          setName(res.data.name),
          setFatherName(res.data.fatherName),
          setEId(res.data.eId),
          setsDate(res.data.sDate),
          seteDate(res.data.eDate)
        ]
      )
      .catch(err => console.log(err))

    return () => {

    }
  }, [])

  return (
    <div className='newstudent'>
      Add Student info
      <h1>update Student</h1>
      <form className='newUserForm' encType='multipart/form-data' onSubmit={handleSubmit}>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" id="name"
            name="name"
            value={name}
            onChange={e => { setName(e.target.value) }}
            placeholder='John doe' />
        </div>
        <div className="newUserItem">
          <label>Father Name</label>

          <input type="text" id="fatherName"
            name="fatherName"
            value={fatherName}
            onChange={e => { setFatherName(e.target.value) }}
            placeholder='Father NAme' />
        </div>
        <div className="newUserItem">
          <label>Enrollment Id</label>
          <input type="text" id="eId"
            name="eId"
            value={eId}
            onChange={e => { setEId(e.target.value) }}
            placeholder='1230452' />
        </div>
        <div className="newUserItem">
          <label>starts on</label>
          <input type="date" id="sDate"
            name="sDate"
            value={sDate}
            onChange={e => { setsDate(e.target.value) }} />
        </div>
        <div className="newUserItem">
          <label>ends on</label>
          <input type="date" id="eDate" name="eDate"
            value={eDate}
            onChange={e => { seteDate(e.target.value) }} />
        </div>

        <div className="newUserItem">
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
        </div>
        <button type="submit">Submit</button>
        <Link to="/">
          <button>Back</button>
        </Link>

      </form>
    </div>
  )
}
