import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apiget = () => {
    var[users,setUsers] =useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
    setUsers(response.data)
    console.log(users)
    })
    .catch(err=>console.log(err))
    
},[])
    
  return (
    <div style={{paddingTop:'100px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell> Name</TableCell>
                        <TableCell>e-mail</TableCell>
                        <TableCell>Username</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((value,index)=>{
                        return(
                            <TableRow>
                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.email}</TableCell>
                                <TableCell>{value.username}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Apiget