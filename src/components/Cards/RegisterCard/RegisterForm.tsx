import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Text,
  Link,
  useToast,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/Auth/useAuth';

interface IRegisterForm {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const auth = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterForm>();

  const onSubmit: SubmitHandler<IRegisterForm> = (data) => {
    if (auth) {
      auth
        .register(data.lastName, data.firstName, data.email, data.password)
        .then((response) => {
          if (response.status == '200') {
            navigate('/login', { replace: true });
            toast({
              position: 'top',
              title: 'Compte crée',
              description: 'Tu peux maintenant te connecter 🥳',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
          }
        })
        .catch((error: any) => {
          if (error.data.error.errors.email.kind === 'unique') {
            console.log('Un utilisateur est déjà inscrit avec ce mail !');
          } // TODO: set error with email in react hook form
        });
    }
  };
  return (
    <Box rounded={'lg'} bg="gray.600" boxShadow={'lg'} p={8}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="4">
          <FormControl id="firstName" isInvalid={!!errors.firstName}>
            <FormLabel>Prénom</FormLabel>
            <Input
              type="text"
              {...register('firstName', {
                required: 'Champ requis',
                minLength: {
                  value: 4,
                  message: 'Au moins 4 caractères requis',
                },
              })}
            />
            <FormErrorMessage>
              {errors.firstName && errors.firstName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl id="lastName" isInvalid={!!errors.lastName}>
            <FormLabel>Nom</FormLabel>
            <Input
              type="text"
              {...register('lastName', {
                required: 'Champ requis',
                minLength: {
                  value: 4,
                  message: 'Au moins 4 caractères requis',
                },
              })}
            />
            <FormErrorMessage>
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl id="email" isInvalid={!!errors.email}>
            <FormLabel>Adresse mail</FormLabel>
            <Input
              type="email"
              {...register('email', {
                required: 'Champ requis',
                minLength: {
                  value: 4,
                  message: 'Au moins 4 caractères requis',
                },
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
                minLength: {
                  value: 4,
                  message: 'Au moins 4 caractères requis',
                },
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            width="100%"
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            S&apos;inscrire
          </Button>
        </Stack>
      </form>
      <Text color="whiteAlpha.900" mt={4}>
        Déjà inscrit ?{' '}
        <Link as={ReactRouterLink} color={'teal.500'} to="/login">
          Se connecter{' '}
        </Link>
      </Text>
    </Box>
  );
};

export default RegisterForm;
