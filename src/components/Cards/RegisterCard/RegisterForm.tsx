import {
  Box,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

interface IRegisterForm {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterForm>();

  function onSubmit(values: any) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 3000);
    });
  }
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
            bg={'teal.500'}
            color={'white'}
            _hover={{
              bg: 'teal.600',
            }}
            isLoading={isSubmitting}
            type="submit"
          >
            S&apos;inscrire
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RegisterForm;
