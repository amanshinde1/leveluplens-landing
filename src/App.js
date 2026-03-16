import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  SimpleGrid,
  Divider
} from "@chakra-ui/react";

import { keyframes } from "@emotion/react";

const float = keyframes`
0% { transform: translate(-50%, -50%) }
50% { transform: translate(-50%, -55%) }
100% { transform: translate(-50%, -50%) }
`;

const Navbar = () => (
  <Box position="sticky" top="0" zIndex="100" py={4} px={8}>
    <HStack justify="space-between" maxW="1200px" mx="auto">
      <Image src="/leveluplenslogo.png" w="120px" />

      <Button
        bgGradient="linear(to-r, purple.500, purple.400)"
        color="white"
        px={6}
        py={5}
        borderRadius="16px"
        fontWeight="500"
      >
        Install LevelUpLens 
      </Button>
    </HStack>
  </Box>
);

function App() {
  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-b, #020617, #030712, #1e1b4b)"
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Background Glow */}
      <Box
        position="absolute"
        top="30%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="700px"
        h="700px"
        bg="radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(99,102,241,0.3) 50%, transparent 70%)"
        filter="blur(180px)"
        animation={`${float} 8s ease-in-out infinite`}
        zIndex={0}
      />

      <Navbar />

      {/* HERO */}
      <Container maxW="900px" py={24} position="relative" zIndex={10}>
        <VStack spacing={10} textAlign="center">

          <Heading fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1.1">
          Know Why You Might Get Rejected -
            <Text
              as="span"
              display="block"
              bgGradient="linear(to-r, purple.400, blue.400)"
              bgClip="text"
            >
              Before You Apply
            </Text>
          </Heading>

          <Text fontSize="xl" color="gray.300" maxW="700px">
          Most job seekers apply blindly.

LevelUpLens breaks down job descriptions and reveals the skills and expectations behind the role — so you can decide if it's worth applying.
          </Text>

          <Button
            h="65px"
            px={12}
            borderRadius="18px"
            fontSize="lg"
            bgGradient="linear(to-r, purple.500, purple.400)"
            boxShadow="0 20px 50px rgba(168,85,247,0.5)"
          >
            Install LevelUpLens Extension
          </Button>

          <Text fontSize="sm" color="gray.400">
            Free • No account required
          </Text>

        </VStack>
      </Container>

      {/* QUICK HOW IT WORKS */}
      <Container maxW="900px" pb={24} position="relative" zIndex={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} textAlign="center">

          <Box>
            <Heading size="md">1️⃣ Upload Resume</Heading>
            <Text mt={3} color="gray.400">
              Upload your resume once so LevelUpLens can extract your skills.
            </Text>
          </Box>

          <Box>
            <Heading size="md">2️⃣ Open a Job</Heading>
            <Text mt={3} color="gray.400">
              Browse jobs normally on LinkedIn.
            </Text>
          </Box>

          <Box>
            <Heading size="md">3️⃣ Get Instant Insight</Heading>
            <Text mt={3} color="gray.400">
              See matched skills, missing skills, and decide if the role is worth applying to.
            </Text>
          </Box>

        </SimpleGrid>
      </Container>

      {/* SYSTEM SECTION */}
      <Container maxW="1200px" pb={24} position="relative" zIndex={10}>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>

          {/* PROBLEM CARD */}
          <Box
            bg="rgba(255,255,255,0.04)"
            border="1px solid rgba(255,255,255,0.15)"
            borderRadius="20px"
            p={8}
            backdropFilter="blur(20px)"
          >
            <VStack align="center" spacing={6} textAlign="center">

              <Heading size="md">
                Why Most Job Applications Go Nowhere
              </Heading>

              <Text fontSize="lg">200+ applications</Text>
              <Text color="gray.400">↓</Text>

              <Text fontSize="lg">Only 4–6 interviews</Text>
              <Text color="gray.400">↓</Text>

              <Text fontSize="lg">95% rejection rate</Text>

              <Text pt={4} color="purple.300">
                Applying to more jobs isn't the solution.
                Applying to the right jobs is.
              </Text>

            </VStack>
          </Box>

          {/* HOW IT WORKS CARD */}
          <Box
            bg="rgba(255,255,255,0.04)"
            border="1px solid rgba(255,255,255,0.15)"
            borderRadius="20px"
            p={8}
            backdropFilter="blur(20px)"
          >
            <VStack spacing={5} align="center" textAlign="center">

              <Heading size="md">
                How LevelUpLens Works
              </Heading>

              <Text>Upload your resume</Text>
              <Text color="gray.400">↓</Text>

              <Text>Open a job on LinkedIn</Text>
              <Text color="gray.400">↓</Text>

              <Text>LevelUpLens analyzes the role instantly</Text>
              <Text color="gray.400">↓</Text>

              <Text>See matched skills & gaps</Text>
              <Text color="gray.400">↓</Text>

              <Text fontWeight="600">Decide if it's worth applying</Text>

            </VStack>
          </Box>

          {/* RESULT CARD */}
          <Box
            bg="rgba(255,255,255,0.05)"
            border="1px solid rgba(255,255,255,0.15)"
            borderRadius="20px"
            p={8}
            backdropFilter="blur(20px)"
          >
            <VStack align="start" spacing={5}>

              <Heading size="md">
                Example Job Analysis
              </Heading>

              <Text fontWeight="500">

              </Text>

              <Text fontSize="3xl" fontWeight="700" color="green.400">
                78% Match Score
              </Text>

              <Divider />

              <Text color="gray.400">Matched Skills</Text>

              <HStack wrap="wrap">
                <Box bg="green.900" px={3} py={1} borderRadius="full">Python</Box>
                <Box bg="green.900" px={3} py={1} borderRadius="full">Django</Box>
                <Box bg="green.900" px={3} py={1} borderRadius="full">REST API</Box>
                <Box bg="green.900" px={3} py={1} borderRadius="full">PostgreSQL</Box>
              </HStack>

              <Text color="gray.400">Missing Skills</Text>

              <HStack wrap="wrap">
                <Box bg="red.900" px={3} py={1} borderRadius="full">Docker</Box>
                <Box bg="red.900" px={3} py={1} borderRadius="full">AWS</Box>
              </HStack>

              <Text color="gray.400" fontSize="sm">
                You match most backend skills including Python and Django.
                However Docker and AWS are also required for this role.
              </Text>

            </VStack>
          </Box>

        </SimpleGrid>

      </Container>

      {/* TRUST SECTION */}
      <Container maxW="800px" pb={24} position="relative" zIndex={10}>
        <VStack spacing={8} textAlign="center">

          <Heading>Your resume stays private.</Heading>

          <Text color="gray.400" maxW="600px">
            LevelUpLens only extracts the skills needed for matching.
            Your resume file is never stored or saved.
          </Text>

          <Button
            h="70px"
            px={14}
            fontSize="lg"
            borderRadius="20px"
            bgGradient="linear(to-r, purple.500, purple.400)"
            boxShadow="0 25px 60px rgba(168,85,247,0.5)"
          >
            Install LevelUpLens Extension
          </Button>

        </VStack>
      </Container>

      {/* SOCIAL PROOF */}
      <Container maxW="800px" pb={24}>
        <VStack spacing={4} textAlign="center">
          <Text color="gray.400">
            Early testers report clearer job decisions and less wasted applications.
          </Text>
        </VStack>
      </Container>

      {/* FOOTER */}
      <Box textAlign="center" py={10} color="gray.500">
        LevelUpLens — Analyze job requirements before you apply
      </Box>

    </Box>
  );
}

export default App;