import { SlideFade } from '@chakra-ui/react';
import RegisterCard from '../components/Cards/RegisterCard/RegisterCard';

const Register = () => {
  return (
    <SlideFade in offsetY="50px">
      <RegisterCard />
    </SlideFade>
  );
};

export default Register;
