import { Box } from "@chakra-ui/react";
import SidebarItemList from "../sidebar-item-list/sidebaritemlist";

const Sidebar = () => {
  return (
    <Box
      position="fixed"
      left={0}
      p={5}
      w="200px"
      top={14}
      h="90%"
      bg="#dfdfdf"
    >
      <SidebarItemList />
    </Box>
  );
};

export default Sidebar;
