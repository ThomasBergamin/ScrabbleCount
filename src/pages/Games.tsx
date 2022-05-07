import {
  Container,
  SlideFade,
  Flex,
  Heading,
  Spacer,
  TableContainer,
} from '@chakra-ui/react';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar/Navbar';
import Table from '../components/Table/Table';

const Games = () => {
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

  const headers = ['Gagnant', 'Score', 'Date'];
  const rows = [
    ['Christophe', '444', '12.3'],
    ['Cécile', '435', '12.4'],
    ['Cécile', '333', '12.3'],
  ];

  return (
    <>
      <Navbar />
      <Container maxW="120ch" py="3">
        <SlideFade in offsetY="50px">
          <Flex alignItems="baseline">
            <Heading as="h2" textColor="gray.50" size="xl">
              Toutes les parties
            </Heading>
            <Spacer></Spacer>
            <Heading as="h3" textColor="gray.50" size="l">
              {`Au ${date}`}
            </Heading>
          </Flex>

          <TableContainer my="6" backgroundColor="gray.600" borderRadius="lg">
            <Table headers={headers} rows={rows} />
          </TableContainer>
        </SlideFade>
      </Container>
      <Footer />
    </>
  );
};

export default Games;
