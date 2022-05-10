import { Spinner } from '@chakra-ui/react';

const Loader = () => {
  return (
    <Spinner
      thickness="2px"
      speed="0.65s"
      emptyColor="gray.200"
      color="teal.500"
    />
  );
};
export default Loader;
