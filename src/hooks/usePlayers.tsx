import { useEffect, useState } from 'react';
import dbService from '../services/dbService';
import { IPlayer } from '../common/models/Player';

const usePlayers = () => {
  const [players, setPlayers] = useState<IPlayer[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState();

  useEffect(() => {
    setLoading(true);
    dbService
      .getPlayers()
      .then((response) => setPlayers(response.data))
      .catch(setErrors)
      .finally(() => setLoading(false));
  }, []);

  return { players, loading, errors };
};

export default usePlayers;
