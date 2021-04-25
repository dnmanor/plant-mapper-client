import React from 'react'
import {Input} from '@chakra-ui/react'

const Search = () => {
    const [value, setValue] = React.useState("")
    const handleChange = (event) => setValue(event.target.value)

  return (
    <>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Search plant.."
        size="sm"
      />
    </>
  )
}

export default Search
