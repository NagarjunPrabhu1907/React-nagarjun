import { Grid } from '@mui/material'
import React from 'react'


function GridLayoutLEarning() {
  return (
    <div>
     <Grid lg={12} item container spacing={2}>
      <Grid item lg={3} sm={6} xs={12}> <h1 style={{backgroundColor:"green"}}> Grid 1</h1></Grid>
      <Grid item lg={3} sm={6} xs={12}> <h1 style={{backgroundColor:"green"}}> Grid 2</h1></Grid>
      <Grid item lg={3} sm={6} xs={12}> <h1 style={{backgroundColor:"green"}}> Grid 3</h1></Grid>
      <Grid item lg={3} sm={6} xs={12}> <h1 style={{backgroundColor:"green"}}> Grid 4</h1></Grid>
     </Grid>
    </div>
  )
}

export default GridLayoutLEarning
