import {
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  VStack,
  Button,
  FormErrorMessage,
  Select,
  useToast,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import dbService from '../../services/dbService';
import usePlayers from '../../hooks/usePlayers';
import { useNavigate } from 'react-router-dom';

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
  const { players } = usePlayers();
  const navigate = useNavigate();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IAddGameForm>();

  const onSubmit: SubmitHandler<IAddGameForm> = async (data) => {
    await dbService
      .postGames(data)
      .then((response) => {
        if (response.status === 200) {
          navigate(`/games/${response.data.id}` || '/', { replace: true });
          toast({
            position: 'top',
            title: 'Partie ajoutée 😍',
            description: 'Tu peux voir les détails sur cette page !',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        throw error.response;
      });
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
        boxShadow="0 2px 0 hsla(0, 0%, 100%, .3), inset 0 3px 5px hsla(0, 0%, 0%, 0.5)"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.date}>
            <FormLabel htmlFor="date">Date</FormLabel>
            <Input
              disabled={!authenticated}
              id="date"
              type="date"
              max={new Date().toLocaleDateString('en-ca')}
              {...register('date', {
                required: 'Champ requis',
              })}
              border="0px"
              boxShadow="0 1px 0 hsla(0, 0%, 100%, .15), inset 0 1px 1px hsla(0, 0%, 0%, 0.4)"
            />
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
              border="0px"
              boxShadow="0 1px 0 hsla(0, 0%, 100%, .15), inset 0 1px 1px hsla(0, 0%, 0%, 0.4)"
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
              border="0px"
              boxShadow="0 1px 0 hsla(0, 0%, 100%, .15), inset 0 1px 1px hsla(0, 0%, 0%, 0.4)"
            />
            <FormErrorMessage>
              {errors.location && errors.location.message}
            </FormErrorMessage>
          </FormControl>

          <HStack mt="4">
            <VStack spacing="1" alignItems="baseline">
              <FormControl isInvalid={!!errors.player1}>
                <FormLabel htmlFor="player1">Joueur 1</FormLabel>
                <Select
                  color="whiteAlpha.900"
                  border="0px"
                  boxShadow="0 1px 0 hsla(0, 0%, 100%, .15), inset 0 1px 1px hsla(0, 0%, 0%, 0.4)"
                  disabled={!authenticated}
                  id="player1"
                  placeholder="Joueur 1"
                  {...register('player1', {
                    required: 'Champ requis',
                  })}
                >
                  {players &&
                    players.map((player) => (
                      <option value={player._id} key={player._id}>
                        {player.firstName + ' ' + player.lastName[0] + '.'}
                      </option>
                    ))}
                </Select>
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
                  border="0px"
                  boxShadow="0 1px 0 hsla(0, 0%, 100%, .15), inset 0 1px 1px hsla(0, 0%, 0%, 0.4)"
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
                  border="0px"
                  boxShadow="0 1px 0 hsla(0, 0%, 100%, .15), inset 0 1px 1px hsla(0, 0%, 0%, 0.4)"
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
                <Select
                  color="whiteAlpha.900"
                  border="0px"
                  boxShadow="0 1px 0 hsla(0, 0%, 100%, .15), inset 0 1px 1px hsla(0, 0%, 0%, 0.4)"
                  disabled={!authenticated}
                  id="player2"
                  placeholder="Joueur 2"
                  {...register('player2', {
                    required: 'Champ requis',
                  })}
                >
                  {players &&
                    players.map((player) => (
                      <option value={player._id} key={player._id}>
                        {player.firstName + ' ' + player.lastName[0] + '.'}
                      </option>
                    ))}{' '}
                  {/* TODO : When a player was selected before, removes it from the array here */}
                </Select>

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
                  border="0px"
                  boxShadow="0 1px 0 hsla(0, 0%, 100%, .15), inset 0 1px 1px hsla(0, 0%, 0%, 0.4)"
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
                  border="0px"
                  boxShadow="0 1px 0 hsla(0, 0%, 100%, .15), inset 0 1px 1px hsla(0, 0%, 0%, 0.4)"
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
            border="0px"
            boxShadow="inset 0 1px 0 hsla(179, 30%, 60%),  0 1px 3px hsla(0, 0%, 0%, 0.7)"
          >
            Ajouter
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddGame;
