import { Flex, Stack, Heading, Text, Link, IconButton } from '@chakra-ui/react';
import RegisterForm from './RegisterForm';
import { Link as ReactRouterLink } from 'react-router-dom';
import { CloseIcon } from '@chakra-ui/icons';

const RegisterCard = () => {
  return (
    <>
      <ReactRouterLink to="/">
        <IconButton
          pos="absolute"
          aria-label="Close Button"
          backgroundColor="white"
          ml="6"
          mt="6"
          borderRadius="100"
          icon={<CloseIcon color="teal.500" />}
        ></IconButton>
      </ReactRouterLink>
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
    </>
  );
};

export default RegisterCard;
