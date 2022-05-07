import {
  Box,
  Stack,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  FormErrorMessage,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth/useAuth';

interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ILoginForm>();
  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    if (auth) {
      auth
        .login(data.email, data.password)
        .then((response) => {
          if (response.status == '200') {
            navigate('/', { replace: true });
          }
        })
        .catch((error) => {
          if (error.data.error.errors.email.kind === 'unique') {
            console.log('Un utilisateur est déjà inscrit avec ce mail !');
          } // TODO : set error with email in react hook form
        });
    }
  };
  return (
    <Box rounded={'lg'} bg="gray.600" boxShadow={'lg'} p={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Button>Se connecter avec Google</Button>
          <Divider />
          <FormControl id="email" isInvalid={!!errors.email}>
            <FormLabel>Adresse mail</FormLabel>
            <Input
              type="email"
              {...register('email', {
                required: 'Champ requis',
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl id="password" isInvalid={!!errors.password}>
            <FormLabel>Mot de passe</FormLabel>
            <Input
              type="password"
              {...register('password', {
                required: 'Champ requis',
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <Stack spacing={5}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Link color={'teal.400'}>Mot de passe oublié ?</Link>
            </Stack>

            <Button
              bg={'teal.500'}
              color={'white'}
              _hover={{
                bg: 'teal.600',
              }}
              isLoading={isSubmitting}
              type="submit"
            >
              Se connecter
            </Button>
          </Stack>
          <Text color="whiteAlpha.900">
            Pas encore de compte ?{' '}
            <Link as={ReactRouterLink} color={'teal.400'} to="/register">
              S&lsquo;inscrire{' '}
            </Link>
          </Text>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
