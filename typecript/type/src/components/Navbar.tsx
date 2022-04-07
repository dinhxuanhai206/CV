import { AppBar, Toolbar, Box, Typography, FormControl, Select, MenuItem } from '@material-ui/core'
import React from 'react'
import Welcome from './Welcome'
import { useState } from 'react'
const Navbar = () => {
    const [position, setPosition] = useState<string>('full stack');

    const onTextChange = (event: React.ChangeEvent<{
        value: unknown;
    }>) =>  setPosition(event.target.value as string);
  return (
   <AppBar position='static' color='primary'>
       <Toolbar>
           <Box 
           display='flex' justifyContent='space-between'
           alignItems='center'
           width={1}
           py={2}
           >
               <Typography variant='h6'>
                    My movie
               </Typography>
                <Box alignItems='center' >
                <Welcome position = {position}/>
                    <Box m={1}>
                        <FormControl>
                            <Select
                            value={position}
                            onChange={onTextChange}
                            >
                                <MenuItem value='full-stack'>Full stack</MenuItem>
                                <MenuItem value='front-end'>Front end</MenuItem>
                                <MenuItem value='back-end'>Back end</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                
                </Box>
           </Box>
       </Toolbar>
   </AppBar>
  )
}

export default Navbar