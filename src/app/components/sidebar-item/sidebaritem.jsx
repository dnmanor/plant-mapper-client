import React from 'react'
import {Button} from '@chakra-ui/react'

const SidebarItem = ({name}) => {

    const handleClick = () => {
        console.log(name);
    }
    return (
        <Button onClick={handleClick} w="100%">
        {name}
      </Button>
    )
}

export default SidebarItem
