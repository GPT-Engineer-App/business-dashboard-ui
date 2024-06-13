import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy authentication logic
    if (email === "user@example.com" && password === "password") {
      localStorage.setItem("authenticated", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container maxW="container.sm" centerContent>
      <Box p={8} mt={20} bg="gray.700" borderRadius="md" width="100%">
        <Heading mb={6} textAlign="center" color="white">Login</Heading>
        <FormControl id="email" mb={4}>
          <FormLabel color="white">Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" mb={4}>
          <FormLabel color="white">Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        {error && <Text color="red.500" mb={4}>{error}</Text>}
        <Button colorScheme="teal" width="100%" onClick={handleLogin}>Login</Button>
      </Box>
    </Container>
  );
};

export default Login;