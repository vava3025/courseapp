import { Button, Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Home = () => {
   const [courses,setCourse]=useState([])

   useEffect(()=>{
    axios.get('http://localhost:4000/course/').then((res)=>{
      setCourse(res.data);
    })
  },[])
      let deleteCourse=(p)=>{
        axios.delete('http://localhost:4000/course/delete/'+p).then((res)=>{
          alert('deleted');
          window.location.reload();
        })
      }
     const navigate=useNavigate() // add a function for update using navigate
     function updateCourse(course){
      navigate('/add',{state:{course}})
     }


      const user=localStorage.getItem('username'); 
   

  return (
    
    <div style={{ padding: '20px', marginTop:'6%'}}> 
    <h5>welcome {user}</h5>
     <Grid2 container spacing={1} >
      {courses.map((item) => (
        <Grid2 item xs={12} sm={6} md={4} lg={3} key={item.courseId}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%',width:'300px' }}>
            <CardMedia
              sx={{ height: 250 }}
              image={item.courseImage} // Dynamically set image for each movie
              title={item.courseName}
            />
            <CardContent sx={{flex: '1 0 auto'}}>
              <Typography gutterBottom variant="h5" component="div">
                {item.courseName}
              </Typography>
              <Typography variant="body2">
                <strong>Category:</strong> {item.courseCategory}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Description:</strong> {item.courseDes}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Fee:</strong> {item.courseFee}
              </Typography>
              <Typography><br />
                <Button sx={{backgroundColor:'blue',color:'white'}}>Read More</Button>
                <Button sx={{backgroundColor:'red',color:'white'}} onClick={()=>{deleteCourse(item._id)}}>Delete</Button>
                <Button sx={{backgroundColor:'green',color:'white'}} onClick={()=>{updateCourse(item)}} >Update</Button>
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
 

  </div>
  )
}

export default Home