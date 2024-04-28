// RPGPT Maker - A comprehensive RPG game creation tool powered by AI technologies
import { Box, Button, Container, Divider, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaBrain, FaCode, FaGamepad, FaMapMarkedAlt, FaRobot } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} py={10}>
        <Heading as="h1" size="2xl" textAlign="center">
          RPGPT Maker
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Create your own AI-driven 2D RPG games with ease!
        </Text>
        <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZ2FtZSUyMGFydHxlbnwwfHx8fDE3MTQzMDY0MDN8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          <FeatureCard icon={FaBrain} title="AI & Machine Learning" description="Leverage LLMs, ML, AI, PG, and RL to craft complex game worlds, NPCs, and systems." />
          <FeatureCard icon={FaMapMarkedAlt} title="Procedural Map Generation" description="Automatically generate vast, detailed maps with unique biomes and landmarks." />
          <FeatureCard icon={FaRobot} title="AI Populated Worlds" description="Create worlds fully populated by AI agents, each with unique behaviors and interactions." />
          <FeatureCard icon={FaCode} title="Game Logic & Coding" description="Design game logic and code directly through a user-friendly interface." />
          <FeatureCard icon={FaGamepad} title="Playable & Simulatable" description="Build games for humans or set up AI-only world simulations." />
        </SimpleGrid>

        <Divider my={10} />

        <Button colorScheme="blue" size="lg" leftIcon={<FaGamepad />}>
          Start Creating
        </Button>
      </VStack>
    </Container>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => (
  <VStack p={5} boxShadow="md" border="1px" borderColor="gray.200" borderRadius="lg" spacing={4} align="stretch">
    <Box fontSize="3xl" color="blue.500">
      <Icon />
    </Box>
    <Text fontWeight="bold" fontSize="xl">
      {title}
    </Text>
    <Text fontSize="md">{description}</Text>
  </VStack>
);

export default Index;
