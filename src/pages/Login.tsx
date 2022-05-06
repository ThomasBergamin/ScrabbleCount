import { SlideFade } from '@chakra-ui/react';
import LoginCard from '../components/Cards/LoginCard/LoginCard';

const Login = () => {
  return (
    <SlideFade in offsetY="50px">
      <LoginCard />
    </SlideFade>
  );
};

export default Login;
