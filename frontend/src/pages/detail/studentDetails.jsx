import React, { useState, useEffect } from 'react'
import "./studentDetails.css"
import { PermIdentity, Publish, CalendarToday, PhoneAndroid, MailOutline } from "@mui/icons-material"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom';


export default function StudentDetails() {

  const params = useParams();


  const [name, setName] = useState("")
  const [fatherName, setfatherName] = useState("")
  const [eId, seteId] = useState("")
  const [sDate, setsDate] = useState("")
  const [eDate, seteDate] = useState("")
  // const [stud, setStud] = useState("")


  useEffect(() => {
    axios.get(`/details/${params.id}`)
      .then(res =>

        [
          setName(res.data.name),
          setfatherName(res.data.fatherName),
          seteId(res.data.eId),
          setsDate(res.data.sDate),
          seteDate(res.data.eDate),


        ]
      )
      .catch(err => console.log(err))
    // console.log("hello  ", params.id)
    return () => {

    }
  }, [params])


  return (

    <div className='Student'>
      <h2>{name}</h2>
      <h2>{fatherName}</h2>
      <h2>{eId}</h2>
      <h2>{sDate}</h2>
      <h2>{eDate}</h2>

    </div>

  )
}
