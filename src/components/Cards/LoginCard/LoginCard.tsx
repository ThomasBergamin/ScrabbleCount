import {
  Flex,
  Stack,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Text,
  Link,
  Divider,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const LoginCard = () => {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg="gray.700">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'} textAlign="center">
          <Heading fontSize={'4xl'} color="gray.100">
            Connecte toi à ton compte
          </Heading>
          <Text fontSize={'lg'} color={'gray.100'}>
            et visualise tes <Link color={'teal.400'}>statistiques</Link> ✌️
          </Text>
        </Stack>

        <Box rounded={'lg'} bg="gray.600" boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <Button>Se connecter avec Google</Button>
            <Divider />
            <FormControl id="email">
              <FormLabel>Adresse mail</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Mot de passe</FormLabel>
              <Input type="password" />
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox colorScheme="teal" color="whiteAlpha.900">
                  Se rappeler de moi
                </Checkbox>
                <Link color={'teal.500'}>Mot de passe oublié ?</Link>
              </Stack>

              <Button
                bg={'teal.500'}
                color={'white'}
                _hover={{
                  bg: 'teal.600',
                }}
              >
                Se connecter
              </Button>
            </Stack>
            <Text color="whiteAlpha.900">
              Pas encore de compte ?{' '}
              <Link as={ReactRouterLink} color={'teal.500'} to="/register">
                S&lsquo;inscrire{' '}
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginCard;
