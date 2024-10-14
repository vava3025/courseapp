import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [user,setUser]=useState({
        username:'',
        password:''
    })
    const navigate=useNavigate()   // used for redirecting to path using logic
    let updateUser=(e)=>{
        setUser({...user,[e.target.name]: e.target.value})
    }
    let sendData=()=>{                                            //check credentials
       if((user.username=="aswathy")&&(user.password=="1234"))  
        {
          sessionStorage.setItem('username','aswathy');//store username value in sessionstorage set item
          navigate('/home');
          localStorage.setItem('username','aswathy');  
        }                      
       else alert("Invalid credentials")
    }
  return (
    <>
      <div> <h2>Login</h2></div> <br/>
      {/* if we doesn't give value the input become read only */}
      <TextField id="outlined-basic" label="Username" variant="outlined" name="username" value={user.username} onChange={updateUser} />  <br/>
       <br/>
      <TextField id="outlined-basic" label="Password" variant="outlined" name="password" value={user.password} onChange={updateUser}/> <br/>
      <br/>
      <Button variant="contained" onClick={sendData}>Submit</Button>

    </>
  )
}

export default Login