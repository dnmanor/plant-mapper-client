import React, { useEffect, useState } from "react";
import { Grid, Box } from "@chakra-ui/react";
import PlantCard from "../plant-card/plantcard";
import axios from "axios";

const PlantList = ({ category }) => {
  const [plantData, setPlantData] = useState([]);

  const images = [
    "https://source.unsplash.com/JZNLu3EMg4M/",
    "https://source.unsplash.com/FWVnG8-EVPg/",
  ];

  useEffect(() => {
    const getAndSetPlantData = async () => {
      const response = await axios.get(
        `http://localhost:3001/plants/${category}`
      );
      const data = await response.data;
      await setPlantData(data.plants);
    };
    getAndSetPlantData();
  }, [category]);

  return (
    <Grid templateColumns="repeat(3, 2fr)" gap={2} ml="56" mt="32">
      {plantData.map((plant, index) => (
        <Box key={plant._id}>
          <PlantCard
            commonName={plant.commonnames}
            scientificName={plant.scientificnames}
            category={"Flowering Trees"}
            image={index % 2 === 0 ? images[0]: images[1]}
          />
        </Box>
      ))}
    </Grid>
  );
};

export default PlantList;
