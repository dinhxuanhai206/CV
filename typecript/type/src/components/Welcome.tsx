import React from 'react'
import { Box } from '@material-ui/core'

interface WelcomeProps{
    position: string
    contry?: string
}
const Welcome = ({position, contry='viet nam'}: WelcomeProps) => {

  return (
    <Box mb={1}>
            Welcome {position} from  {contry}
    </Box>
  )
}

export default Welcome