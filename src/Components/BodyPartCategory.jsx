import React from 'react'
import { Box } from '@mui/material'
import BodyPart from './BodyPartComponent'
import BodyPartComponent from './BodyPartComponent'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

const BodyPartCategory = ({ bodyParts, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
        {bodyParts.map((part) => (
            <Box key={part.id || part}
            partId={part.id || part}
            title={part.id || part}
            m='0 40px'
            >
                <BodyPartComponent part={part} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        ))}
    </ScrollMenu>
  )
}

export default BodyPartCategory