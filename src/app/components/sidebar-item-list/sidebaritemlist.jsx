import React from "react";
import { VStack } from "@chakra-ui/react";
import SidebarItem from '../sidebar-item/sidebaritem'

const SidebarItemList = () => {
  const items = [
    "All",
    "Foilage Trees",
    "Flowering Trees",
    "Conifers",
    "Palm & Palm-like",
    "Cacti & Suculents",
    "Annuals",
    "Flowering Shrubs",
    "Foilage Shrubs",
    "House Plants",
    "Specials",
  ];

  return (
  <VStack>
      {
          items.map((item)=>{
           return <SidebarItem name={item}/>
          })
      }
  </VStack>
  )
};

export default SidebarItemList;
