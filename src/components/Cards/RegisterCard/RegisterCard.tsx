import { Flex, Stack, Heading, Text, Link } from '@chakra-ui/react';
import RegisterForm from './RegisterForm';

const RegisterCard = () => {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg="gray.700">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack spacing="4" align={'center'} textAlign="center">
          <Heading fontSize={'4xl'} color="gray.100">
            Pas encore de compte ?
          </Heading>
          <Text fontSize={'lg'} color={'gray.100'}>
            Inscris toi et profite de toutes les{' '}
            <Link color={'teal.400'}>fonctionnalités</Link> ✌️
          </Text>
        </Stack>

        <RegisterForm />
      </Stack>
    </Flex>
  );
};

export default RegisterCard;
