import { useEffect, useState } from 'react';
import dbService from '../services/dbService';
import { useAuth } from '../contexts/Auth/useAuth';
import { IPlayer } from '../common/models/Player';

const usePlayers = () => {
  const auth = useAuth();
  const [players, setPlayers] = useState<IPlayer[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState();

  useEffect(() => {
    if (auth) {
      setLoading(true);
      dbService
        .getPlayers(auth.authHeader())
        .then((response) => setPlayers(response.data))
        .catch(setErrors)
        .finally(() => setLoading(false));
    }
  }, []);

  return { players, loading, errors };
};

export default usePlayers;
