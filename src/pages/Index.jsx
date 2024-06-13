import { Box, Container, Flex, Text, VStack, IconButton, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { FaCog, FaSignOutAlt, FaUser, FaPlus, FaChartLine, FaDollarSign, FaChartPie, FaDownload } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.900" color="white">
      <Flex width="100%" justifyContent="space-between" alignItems="center" p={4}>
        <Text fontSize="2xl" fontWeight="bold">Dashboard</Text>
        <Menu>
          <MenuButton as={IconButton} icon={<FaUser />} variant="outline" />
          <MenuList>
            <MenuItem icon={<FaUser />}>Personal account</MenuItem>
            <MenuItem icon={<FaCog />}>Manage workspace</MenuItem>
            <MenuItem icon={<FaChartLine />}>My GPTs</MenuItem>
            <MenuItem icon={<FaCog />}>Customize ChatGPT</MenuItem>
            <MenuItem icon={<FaCog />}>Settings</MenuItem>
            <MenuItem icon={<FaDownload />}>Download the macOS app</MenuItem>
            <MenuItem icon={<FaSignOutAlt />}>Log out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <VStack spacing={8} mt={8}>
        <Flex justifyContent="space-around" width="100%">
          <Box p={4} bg="gray.800" borderRadius="md" width="200px" textAlign="center">
            <FaChartLine size="24px" />
            <Text mt={2}>Sales</Text>
          </Box>
          <Box p={4} bg="gray.800" borderRadius="md" width="200px" textAlign="center">
            <FaDollarSign size="24px" />
            <Text mt={2}>Revenue</Text>
          </Box>
          <Box p={4} bg="gray.800" borderRadius="md" width="200px" textAlign="center">
            <FaChartPie size="24px" />
            <Text mt={2}>Metrics</Text>
          </Box>
        </Flex>
        <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
          Create Workspace
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;