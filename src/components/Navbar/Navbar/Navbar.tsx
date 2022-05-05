import { HamburgerIcon } from '@chakra-ui/icons';
import { HiHome } from 'react-icons/hi';
import { FaGamepad } from 'react-icons/fa';
import { BiStats } from 'react-icons/bi';
import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  Flex,
  Spacer,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import NavbarItem from './Navbar.item';

const Navbar = () => {
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  return (
    <Box as="header">
      <Box h="5px" bg="teal.500" />
      <Container maxW="120ch" py="3" px={4}>
        <Flex direction="row">
          {isLargerThan700 ? (
            <>
              <ButtonGroup spacing="2">
                <Link as={RouterLink} to="/">
                  <NavbarItem name="Accueil" leftIcon={<HiHome />} />
                </Link>
                <Link as={RouterLink} to="/games">
                  <NavbarItem name="Parties" leftIcon={<FaGamepad />} />
                </Link>
                <Link as={RouterLink} to="/stats">
                  <NavbarItem name="Statistiques" leftIcon={<BiStats />} />
                </Link>
              </ButtonGroup>
            </>
          ) : (
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                    _hover={{
                      background: 'white',
                      color: 'teal.500',
                    }}
                    textColor={isOpen ? 'teal.500' : 'gray.100'}
                  />
                  <MenuList>
                    <MenuItem icon={<HiHome />}>Accueil</MenuItem>
                    <MenuItem icon={<FaGamepad />}>Parties</MenuItem>
                    <MenuItem icon={<BiStats />}>Statistiques</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          )}
          <Spacer />
          <Link as={RouterLink} to="/stats">
            <NavbarItem name="Mon compte" />
          </Link>
        </Flex>

        <Divider mt={2} w="100%" mx="auto" />
      </Container>
    </Box>
  );
};

export { Navbar };
