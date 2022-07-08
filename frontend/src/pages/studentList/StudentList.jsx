import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './StudentList.css'
import { ConstructionOutlined, DeleteOutline } from '@mui/icons-material';
import { userRows } from '../../DummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';




export default function StudentList({ students }) {




  console.log('yuguygfyufc', students)





  const [data, setData] = useState(students)

  const handleDelete = (_id) => {
    const id = _id;
    const type = typeof (id);
    console.log(type);
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(res => alert(res.data))
      .catch(err => console.log(err));

    setData(data.filter((item) => item._id !== _id))

  };
  console.log(students);
  const columns = [
    {
      field: 'name', headerName: 'Name', width: 130, renderCell: (params) => {
        return (
          <div className='userListUser'>
            {params.row.name}
          </div>
        )
      }
    },


    {
      field: 'EnrollmentID',
      headerName: 'Enrollment ID',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            {params.row.eId}
          </div>
        )
      }

    },
    {
      field: 'fatherNAME',
      headerName: 'fatherNAME',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            {params.row.fatherName}
          </div>
        )
      }

    },
    {
      field: 'StartDate',
      headerName: 'StartDate',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            {params.row.sDate}
          </div>
        )
      }

    },
    {
      field: 'EndDate',
      headerName: 'EndDate',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            {params.row.eDate}
          </div>
        )
      }

    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/details/" + params.row._id}>
              <button className='userListEdit'>
                Details
              </button>
            </Link>
            <Link to={"/update/" + params.row._id}>
              <button className='userListEdit'>
                edit
              </button>
            </Link>
            <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row._id)}></DeleteOutline>
          </>
        )
      }
    },
  ];

  return (
    <div className="table">
      <DataGrid
        getRowId={(row) => row._id}
        rows={data}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        rowsPerPageOptions={[5]}
        checkboxSelection
      />



    </div>
  )
}
