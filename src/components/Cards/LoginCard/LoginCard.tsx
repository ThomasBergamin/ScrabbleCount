import { CloseIcon } from '@chakra-ui/icons';
import { Flex, Stack, Heading, Text, Link, IconButton } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginCard = () => {
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
          <Stack align={'center'} textAlign="center">
            <Heading fontSize={'4xl'} color="gray.100">
              Connecte toi à ton compte
            </Heading>
            <Text fontSize={'lg'} color={'gray.100'}>
              et visualise tes <Link color={'teal.400'}>statistiques</Link> ✌️
            </Text>
          </Stack>

          <LoginForm />
        </Stack>
      </Flex>
    </>
  );
};

export default LoginCard;
