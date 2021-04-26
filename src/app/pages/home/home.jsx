import React from "react";
import Search from "../../components/search/search";
import Sidebar from "../../components/sidebar/sidebar";
import PlantList from "../../components/plant-list/plantlist"

import { Flex, Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <div>
      <Search />
        <Sidebar />
        <PlantList category={'all'} />
    </div>
  );
};

export default Home;
