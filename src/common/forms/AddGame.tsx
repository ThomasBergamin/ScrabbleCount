import {
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  VStack,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import dbService from '../../services/dbService';
import { useAuth } from '../../contexts/Auth/useAuth';

interface IAddGameForm {
  date: string;
  time: string;
  location: string;
  player1: string;
  player2: string;
  score1: string;
  score2: string;
  scrabbles2: string;
  scrabbles1: string;
}

const AddGame = ({ authenticated }: { authenticated: boolean }) => {
  const auth = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IAddGameForm>();

  const onSubmit: SubmitHandler<IAddGameForm> = async (data) => {
    if (auth) {
      await dbService
        .postGames(data, auth.authHeader())
        .then((response) => {
          if (response.status === 200) {
            console.log(200);
            alert('Success');
          } // TODO: Redirect user to game page (with id sent from backend)
        })
        .catch((error) => {
          throw error.response;
        });
    }
  };

  return (
    <>
      <Box
        bgColor="gray.600"
        p="8"
        borderRadius="10"
        w={['100%', '100%', '50%']}
        filter={authenticated ? '' : 'blur(3px)'}
        cursor={authenticated ? 'pointer' : 'not-allowed'}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.date}>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input
              disabled={!authenticated}
              id="date"
              type="date"
              {...register('date', {
                required: 'Champ requis',
              })}
            />{' '}
            <FormErrorMessage>
              {errors.date && errors.date.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.time}>
            <FormLabel mt="4" htmlFor="time">
              Heure
            </FormLabel>
            <Input
              disabled={!authenticated}
              id="time"
              type="time"
              {...register('time', {
                required: 'Champ requis',
              })}
            />
            <FormErrorMessage>
              {errors.time && errors.time.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.location}>
            <FormLabel mt="4" htmlFor="location">
              Lieu
            </FormLabel>
            <Input
              disabled={!authenticated}
              placeholder="Ville (ex : Paris)"
              id="location"
              type="text"
              {...register('location', {
                required: 'Champ requis',
                minLength: {
                  value: 2,
                  message: 'Au moins 2 caractères requis',
                },
              })}
            />
            <FormErrorMessage>
              {errors.location && errors.location.message}
            </FormErrorMessage>
          </FormControl>

          <HStack mt="4">
            <VStack spacing="1" alignItems="baseline">
              <FormControl isInvalid={!!errors.player1}>
                <FormLabel htmlFor="player1">Joueur 1</FormLabel>
                <Input
                  disabled={!authenticated}
                  id="player1"
                  type="text"
                  placeholder="Joueur 1"
                  {...register('player1', {
                    required: 'Champ requis',
                    minLength: {
                      value: 2,
                      message: 'Au moins 2 caractères requis',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.player1 && errors.player1.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>

            <VStack spacing="1" alignItems="baseline">
              <FormControl isInvalid={!!errors.score1}>
                <FormLabel htmlFor="score1">Score</FormLabel>
                <Input
                  disabled={!authenticated}
                  id="score1"
                  type="number"
                  min="0"
                  placeholder="345"
                  {...register('score1', {
                    required: 'Champ requis',
                  })}
                />
                <FormErrorMessage>
                  {errors.score1 && errors.score1.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
            <VStack spacing="1" alignItems="baseline">
              <FormControl isInvalid={!!errors.scrabbles1}>
                <FormLabel htmlFor="scrabbles1">Scrabbles</FormLabel>
                <Input
                  disabled={!authenticated}
                  id="scrabbles1"
                  type="number"
                  min="0"
                  placeholder="2"
                  {...register('scrabbles1', {
                    required: 'Champ requis',
                  })}
                />
                <FormErrorMessage>
                  {errors.scrabbles1 && errors.scrabbles1.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </HStack>
          <HStack mt="4">
            <VStack spacing="1" alignItems="baseline">
              <FormControl isInvalid={!!errors.player2}>
                <FormLabel htmlFor="player2">Joueur 2</FormLabel>
                <Input
                  disabled={!authenticated}
                  id="player2"
                  type="text"
                  placeholder="Joueur 2"
                  {...register('player2', {
                    required: 'Champ requis',
                    minLength: {
                      value: 2,
                      message: 'Au moins 2 caractères requis',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.player2 && errors.player2.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
            <VStack spacing="1" alignItems="baseline">
              <FormControl isInvalid={!!errors.score2}>
                <FormLabel htmlFor="score2">Score</FormLabel>
                <Input
                  disabled={!authenticated}
                  id="score2"
                  type="number"
                  min="0"
                  placeholder="345"
                  {...register('score2', {
                    required: 'Champ requis',
                  })}
                />
                <FormErrorMessage>
                  {errors.score2 && errors.score2.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
            <VStack spacing="1" alignItems="baseline">
              <FormControl isInvalid={!!errors.scrabbles2}>
                <FormLabel htmlFor="scrabbles2">Scrabbles</FormLabel>
                <Input
                  disabled={!authenticated}
                  id="scrabbles2"
                  type="number"
                  min="0"
                  placeholder="2"
                  {...register('scrabbles2', {
                    required: 'Champ requis',
                  })}
                />
                <FormErrorMessage>
                  {errors.scrabbles2 && errors.scrabbles2.message}
                </FormErrorMessage>
              </FormControl>
            </VStack>
          </HStack>

          <Button
            mt={6}
            colorScheme="teal"
            type="submit"
            w="100%"
            isLoading={isSubmitting}
            disabled={!authenticated}
          >
            Ajouter
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddGame;
