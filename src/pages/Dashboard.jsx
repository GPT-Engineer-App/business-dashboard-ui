import { Box, Container, Flex, Text, VStack, Button } from "@chakra-ui/react";
import { FaPlus, FaChartLine, FaDollarSign, FaChartPie } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.900" color="white">
      <Flex width="100%" justifyContent="space-between" alignItems="center" p={4}>
        <Text fontSize="2xl" fontWeight="bold">Dashboard</Text>
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

export default Dashboard;