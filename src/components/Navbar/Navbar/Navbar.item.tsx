import { Button } from '@chakra-ui/react';

interface INavbarItem {
  name: string;
  leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const NavbarItem = ({ name, leftIcon }: INavbarItem) => {
  return (
    <Button
      borderRadius="1"
      as="a"
      _hover={{
        cursor: 'pointer',
        background: 'white',
        color: 'teal.500',
      }}
      textColor="gray.100"
      variant="ghost"
      colorScheme="blue"
      leftIcon={leftIcon}
    >
      {name}
    </Button>
  );
};

export default NavbarItem;
