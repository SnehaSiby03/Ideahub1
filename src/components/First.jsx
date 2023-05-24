import React from 'react'
import { TextField, Typography } from '@mui/material';

const First =() =>{
    return (

    <div>
        <h1>Sneha Siby</h1>
     <input placeholder = "Name"/>
     <br/>
     <input type="password" placeholder="password"/>
     <br/>
     <br/>
     <button>Submit</button>


     <br/>
     <Typography variant = "h1">Sneha Siby</Typography>
     <br/>
     <br/>
     <TextField variant = "outlined" label= "Name"/>
     <br/>
     <br/>
     <TextField variant = "filled" label="COLLEGE"/>
     <br/>
     <br/>
     <TextField variant = "standard" label ="PLACE"/>
     <br/>
      
    </div>
    )
}
export default First


