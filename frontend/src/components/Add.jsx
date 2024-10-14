import { Box, Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Add = () => {
   const [course, setCourse]=useState({
      courseId:'',
      courseName:'',
      courseCategory:'',
      courseDes:'',
      courseImage:'',
      courseFee:''
   });
      const navigate=useNavigate()

       const fetchValue=(e)=>{
           setCourse({...course, [e.target.name]: e.target.value});
       };
       const location=useLocation()
    const sendData=()=>{
      //  console.log(course);
      if (location.state!=null){
        axios.put('http://localhost:4000/course/edit/'+location.state.course._id,course).then((res)=>{
          alert('Data upadted');
          navigate('/home')
        }).catch((error)=>{
          console.log(error);
        })

        }
         else{
          axios.post('http://localhost:4000/course/addcourse',course).then((res)=>{
            navigate('/home')
          }).catch((error)=>{
            console.log(error)
          })
         }
         
      };
   useEffect(()=>{
    if (location.state!=null){
      setCourse({...course,
        courseId:location.state.course.courseId,
        courseName:location.state.course.courseName,
        courseCategory:location.state.course.courseCategory,
        courseDes:location.state.course.courseDes,
        courseImage:location.state.course.courseImage,
        courseFee:location.state.course.courseFee,
      })
    }
   },[])
   
  return (
    <div>
      <h2 style={{ paddingTop: "50px" }}>New Courses</h2>
      <Box 
        component="form"
        sx={{ '& > :not(style)': { m: 1,width: '25ch' } }} 
        noValidate
        autoComplete="off"
        >
     <TextField id="standard-basic" label="courseId" variant="outlined" name="courseId" value={course.courseId} onChange={fetchValue}/><br />
     <TextField id="standard-basic" label="courseName" variant="outlined" name="courseName"  value={course.courseName} onChange={fetchValue}/><br />
     <TextField id="standard-basic" label="courseCategory" variant="outlined" name="courseCategory"  value={course.courseCategory} onChange={fetchValue} /><br />
     <TextField id="standard-basic" label="courseDes" variant="outlined" name="courseDes"  value={course.courseDes} onChange={fetchValue} /><br />
     <TextField id="standard-basic" label="courseImage" variant="outlined" name="courseImage"  value={course.courseImage} onChange={fetchValue} /><br />
     <TextField id="standard-basic" label="courseFee" variant="outlined" name="courseFee"  value={course.courseFee} onChange={fetchValue}/><br /><br />
     <Button variant="contained" onClick={sendData}>submit</Button><br />
    </Box>
    </div>

  )
}

export default Add