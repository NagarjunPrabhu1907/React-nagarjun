import React from 'react'
import {Typography,Stack,Button,ButtonGroup,ToggleButton,ToggleButtonGroup} from '@mui/material'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import { useState } from 'react'
 

function Mui() {
    
  return (
    <div>
<Stack direction= 'row'>
    <ButtonGroup variant= 'contained' orientation='vertical' size= 'small' color = 'secondary' aria-aria-label='alignment button group'>
<Button onClick={()=>(alert("haiileft clicked"))}> left</Button>
<Button > center</Button>
<Button > right</Button>
</ButtonGroup>
</Stack>    
<Stack direction='row'> 

<ToggleButtonGroup aria-label = 'text formatting'>
    <ToggleButton value= 'bold' aria-label='bold'> Format Bold</ToggleButton>
    <ToggleButton value= 'italic' aria-label='italic'> Format Italic</ToggleButton>
    <ToggleButton value= 'underlined' aria-label='underlined'> Format Underlined</ToggleButton>
</ToggleButtonGroup>

</Stack>
      
    </div>
  )
}


export default Mui;