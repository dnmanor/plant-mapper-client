import React from "react";
import { Input, InputRightElement, InputGroup, Button } from "@chakra-ui/react";

const Search = () => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <InputGroup width="xs">
      <Input
        value={value}
        variant="filled"
        onChange={handleChange}
        placeholder="Search plant.."
        size="lg"
        // Width="xs"
      />
      <InputRightElement width="4.5rem">
        <Button  size="lg" margin=""  >
        {'Search'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default Search;
