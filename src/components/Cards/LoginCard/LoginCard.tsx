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

const LoginCard = () => {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg="gray.700">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'} textAlign="center">
          <Heading fontSize={'4xl'} color="gray.100">
            Connectez vous à votre compte
          </Heading>
          <Text fontSize={'lg'} color={'gray.100'}>
            et visualisez vos <Link color={'teal.400'}>statistiques</Link> ✌️
          </Text>
        </Stack>

        <Box rounded={'lg'} bg="white" boxShadow={'lg'} p={8}>
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
                <Checkbox colorScheme="teal">Se rappeler de moi</Checkbox>
                <Link color={'teal.500'}>Mot de passe oublié ?</Link>
              </Stack>
              <Button
                bg={'teal.500'}
                color={'white'}
                _hover={{
                  bg: 'teal.600',
                }}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginCard;
