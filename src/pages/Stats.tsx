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
} from '@chakra-ui/react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar/Navbar';

const Stats = () => {
  return (
    <>
      <Navbar />
      <Container maxW="120ch" py="3">
        <Flex>
          <Heading as="h2" textColor="gray.50" size="xl">
            Statistiques
          </Heading>
          <Spacer></Spacer>
          <Heading as="h3" textColor="gray.50" size="l">
            Le 06 Mai à 12:23
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

        <TableContainer my="6">
          <Table colorScheme="teal">
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Stats;
