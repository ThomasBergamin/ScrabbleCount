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
                    <Link as={RouterLink} to="/">
                      <MenuItem icon={<HiHome />}>Accueil</MenuItem>
                    </Link>
                    <Link as={RouterLink} to="/games">
                      <MenuItem icon={<FaGamepad />}>Parties</MenuItem>
                    </Link>
                    <Link as={RouterLink} to="/stats">
                      <MenuItem icon={<BiStats />}>Statistiques</MenuItem>
                    </Link>
                  </MenuList>
                </>
              )}
            </Menu>
          )}
          <Spacer />
          <Link as={RouterLink} to="/login">
            <NavbarItem name="Se connecter" />
          </Link>
        </Flex>

        <Divider mt={2} w="100%" mx="auto" />
      </Container>
    </Box>
  );
};

export { Navbar };
