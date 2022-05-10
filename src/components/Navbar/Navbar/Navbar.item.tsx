import { Button } from '@chakra-ui/react';

interface INavbarItem {
  name: string;
  disconnect?: boolean;
  connect?: boolean;
  leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const NavbarItem = ({ name, leftIcon, disconnect, connect }: INavbarItem) => {
  return (
    <Button
      borderRadius="5"
      as="a"
      _hover={{
        cursor: 'pointer',
        background: 'white',
        color: disconnect ? 'red.600' : 'teal.500',
      }}
      textColor="whiteAlpha.900"
      variant="ghost"
      leftIcon={leftIcon}
      backgroundColor={
        disconnect ? 'red.600' : connect ? 'teal.500' : 'gray.800'
      }
      boxShadow={
        disconnect
          ? 'inset 0 1px 0 hsla(3, 53%, 46%, .9),  0 2px 2px hsla(0, 0%, 0%, 0.7)'
          : connect
          ? 'inset 0 1px 0 hsla(179, 30%, 60%, .9),  0 2px 2px hsla(0, 0%, 0%, 0.7)'
          : '0 1px 0 hsla(0, 0%, 100%, .1), inset 0 1px 1px hsla(0, 0%, 0%, 0.5)'
      }
    >
      {name}
    </Button>
  );
};

export default NavbarItem;
