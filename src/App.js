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

const demoFloat = keyframes`
  0% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-6px) scale(1.01); }
  100% { transform: translateY(0px) scale(1); }
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

      {/* HERO - MAXIMUM CONVERSION */}
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

          <Text fontSize="lg" color="gray.400" mt={-4}>
            Tired of seeing "Unfortunately..."? Know before you apply.
          </Text>

          <Text fontSize="xl" color="gray.300" maxW="700px">
            Most job seekers apply blindly.
            LevelUpLens analyzes job descriptions and shows what the role actually expects — so you can decide if applying makes sense before you waste time.
          </Text>

          {/* 🔥 PERFECT SAFETY LINE */}
          <Text fontSize="sm" color="gray.400" fontWeight="500">
            LevelUpLens gives insights — you decide where to apply.
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

          <VStack spacing={1} fontSize="sm" color="gray.400">
            <Text>✓ Works directly on LinkedIn</Text>
            <Text>✓ Your resume never leaves your browser</Text>
            <Text>✓ Free • No account required</Text>
          </VStack>

        </VStack>
      </Container>

      {/* PRODUCT DEMO VIDEO */}
      <Container maxW="1000px" pb={24} position="relative" zIndex={10}>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="900px"
          h="450px"
          bg="radial-gradient(circle, rgba(168,85,247,0.35), transparent 70%)"
          filter="blur(120px)"
          zIndex={0}
        />

        <Box
          position="relative"
          borderRadius="24px"
          overflow="hidden"
          border="1px solid rgba(255,255,255,0.15)"
          boxShadow="0 40px 120px rgba(0,0,0,0.6)"
          animation={`${demoFloat} 6s ease-in-out infinite`}
          transition="all 0.3s ease"
          _hover={{
            transform: "scale(1.02)",
            boxShadow: "0 60px 140px rgba(0,0,0,0.7)"
          }}
          zIndex={1}
        >
          <video autoPlay muted loop playsInline style={{ width: "100%" }}>
            <source src="/demo.mp4" type="video/mp4" />
          </video>
        </Box>
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
              Understand requirements and decide to apply or skip.
            </Text>
          </Box>

        </SimpleGrid>
      </Container>

      {/* SYSTEM SECTION */}
      <Container maxW="1200px" pb={24} position="relative" zIndex={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>

          {/* PROBLEM CARD */}
          <Box bg="rgba(255,255,255,0.04)" border="1px solid rgba(255,255,255,0.15)" borderRadius="20px" p={8} backdropFilter="blur(20px)">
            <VStack align="center" spacing={6} textAlign="center">
              <Heading size="md">Why Most Job Applications Go Nowhere</Heading>
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
          <Box bg="rgba(255,255,255,0.04)" border="1px solid rgba(255,255,255,0.15)" borderRadius="20px" p={8} backdropFilter="blur(20px)">
            <VStack spacing={5} align="center" textAlign="center">
              <Heading size="md">How LevelUpLens Works</Heading>
              <Text>Upload your resume</Text>
              <Text color="gray.400">↓</Text>
              <Text>Open a job on LinkedIn</Text>
              <Text color="gray.400">↓</Text>
              <Text>LevelUpLens analyzes the role instantly</Text>
              <Text color="gray.400">↓</Text>
              <Text>See gaps & expectations</Text>
              <Text color="gray.400">↓</Text>
              <Text fontWeight="600">Decide to apply or skip</Text>
            </VStack>
          </Box>

          {/* RESULT CARD */}
          <Box bg="rgba(255,255,255,0.05)" border="1px solid rgba(255,255,255,0.15)" borderRadius="20px" p={8} backdropFilter="blur(20px)">
            <VStack align="start" spacing={5}>
              <Heading size="md">Example Job Analysis</Heading>

              <Text fontSize="3xl" fontWeight="700" color="green.400">
                78% Alignment Score
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
                You match core backend skills, but this role also expects Docker and AWS.
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
            LevelUpLens only extracts the skills needed for analysis.
            Your resume is never stored or saved.
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
            Early testers report clearer decisions and fewer wasted applications.
          </Text>
        </VStack>
      </Container>

      {/* FOOTER */}
      <Box textAlign="center" py={10} color="gray.500">
        LevelUpLens v1.0 — Decide before you apply
        <Text mt={2} fontSize="xs">Built for job seekers like you 🇮🇳</Text>
      </Box>

    </Box>
  );
}

export default App;
