import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Butt = () => {
    var [hname,sethname]=useState("");
    const ChangehName =()=>{
        console.log("Clicked");
        sethname("Home page")
    }
    const ChangegName =()=>{
        console.log("Clicked");
        sethname("Gallery page")
    }
    const ChangecName =()=>{
        console.log("Clicked");
        sethname("Contact page")
    }
  return (
    <div>
        <br/>
        <Button variant='contained'color= 'success' onClick={ChangehName}>Home</Button>
        <br/>
        <br/>
        <Button variant='contained'color= 'primary' onClick={ChangegName}>Gallery</Button>
        <br/>
        <br/>
        <Button variant='contained'color= 'secondary'onClick={ChangecName}>Contact</Button>
        <br/>
        <br/>
        <Typography variant='h3'>Welcome To {hname}</Typography>
    </div>
  )
}

export default Butt