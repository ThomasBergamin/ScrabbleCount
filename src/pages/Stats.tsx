import {
  Heading,
  Spacer,
  Flex,
  Container,
  Box,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tr,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  SlideFade,
} from '@chakra-ui/react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar/Navbar';

const Stats = () => {
  const today = new Date();
  const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre',
  ];
  const month = months[today.getMonth()];
  const day = today.getDay();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const date = `${day} ${month} à ${hours}:${minutes}`;
  return (
    <>
      <Navbar />
      <Container maxW="120ch" py="3">
        <SlideFade in offsetY="50px">
          <Flex alignItems="baseline">
            <Heading as="h2" textColor="gray.50" size="xl">
              Statistiques
            </Heading>
            <Spacer></Spacer>
            <Heading as="h3" textColor="gray.50" size="l">
              {`Au ${date}`}
            </Heading>
          </Flex>

          <Box mt="4" width="100%" borderRadius="10" bgColor="teal.400" p="6">
            <StatGroup color="whiteAlpha.900" height="100%html">
              <Stat>
                <StatLabel>Meilleur Joueur</StatLabel>
                <StatNumber>Cécile</StatNumber>
                <StatHelpText>25 parties gagnées</StatHelpText>
              </Stat>
              <Spacer></Spacer>
              <Stat borderLeft="solid 2px white" pl="4">
                <StatLabel>Meilleur Score</StatLabel>
                <StatNumber>535</StatNumber>
                <StatHelpText>Christophe, le 05 Mai 2022</StatHelpText>
              </Stat>
              {/* links to the game where the score was made */}
              <Spacer></Spacer>
              <Stat borderLeft="solid 2px white" pl="4">
                <StatLabel>Plus de Srabbles en une partie</StatLabel>
                <StatNumber>6</StatNumber>
                <StatHelpText>Cécile, le 05 Mai 2022</StatHelpText>
              </Stat>
            </StatGroup>
          </Box>
        </SlideFade>
      </Container>
      <Footer />
    </>
  );
};

export default Stats;
