import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Tabular = () => {
    var[names,setNames]=useState(["sneha","riya","liya"])
  return (
    <div style={{paddingTop:"50px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell style={{color:"red",fontFamily:"fantasy",fontSize:"30px"}}>
                        Name
                    </TableCell>
                    <TableCell style={{color:"red",fontFamily:"fantasy",fontSize:"30px"}}>
                        Age
                    </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index)=>{
                        return(
                            <TableRow>
                                <TableCell>{value}</TableCell>
                            </TableRow>
                            )

                        

                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Table