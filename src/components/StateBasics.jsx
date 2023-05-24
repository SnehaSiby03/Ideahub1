import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [pname,setPname]=useState("Sneha");
    var[val,setVal] = useState()
    const inputHandler = (p)=>{
        setVal(p.target.value);
        console.log(val);
    }
    const ChangeName =()=>{
        setPname(val)
        setVal("")
       
    }
  return (
    <div>
        <Typography variant='h4'>{pname}</Typography>
        <br/>
        <br/>
        <TextField variant='outlined'value={val} label='Name'onChange={inputHandler}/>
        <br/>
        <br/>
        
        <Button variant='contained'onClick={ChangeName} >Change</Button>
    </div>
    
  )
}

export default StateBasics