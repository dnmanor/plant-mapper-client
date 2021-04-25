import React from "react";
import {
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Center,
} from "@chakra-ui/react";

const Search = () => {
  const [value, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <Center  marginTop="10">
      <InputGroup width="xs">
        <Input
          value={value}
          variant="filled"
          onChange={handleChange}
          placeholder="Search plant.."
          size="lg"
          Width="xs"
        />
        <InputRightElement width="4.5rem">
          <Button size="lg" margin="">
            {"Search"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Center>
  );
};

export default Search;
