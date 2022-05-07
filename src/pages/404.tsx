import {
  Box,
  Heading,
  Container,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { NotFound as NotFoundSvg } from '../img/404';

const NotFound = () => {
  return (
    <>
      <Container maxW="120ch" p="6">
        <VStack mt="4" textAlign="center">
          <Heading as="h1" color="whiteAlpha.900">
            Erreur 404
          </Heading>
          <Text fontSize="2xl" color="whiteAlpha.900">
            Désolé ! La page que vous cherchez n&apos;existe pas 😭
          </Text>
          <Box py="6" w={['80%', '70%', '40%']}>
            <NotFoundSvg />
          </Box>
          <Link to="/">
            <Button
              size="lg"
              mb="6"
              bg={'teal.500'}
              color={'white'}
              _hover={{
                bg: 'teal.600',
              }}
            >
              Retour à l&apos;accueil
            </Button>
          </Link>
        </VStack>
      </Container>
    </>
  );
};

export default NotFound;
