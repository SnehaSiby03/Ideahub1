import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{paddingTop:'100px'}}>
        <AppBar>
            <Toolbar>
                <Typography color={'red'}sx={{ flexGrow:2}}align='left'>NewApp</Typography>
                    <Button variant ="text" color="error" ><Link to={'/'} style={{textDecoration:'none',color:"white"}}> Home</Link></Button>
                    <Button variant ="text" color="error" ><Link to={'/First'}style={{textDecoration:'none',color:"white"}}>First</Link></Button>
                    <Button variant ="text" color="error" ><Link to={'/Lata'}style={{textDecoration:'none',color:"white"}}>Table</Link></Button>
                    <Button variant ="text" color="error" ><Link to={'/Apiget'}style={{textDecoration:'none',color:"white"}}>Apiget</Link></Button>
                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar