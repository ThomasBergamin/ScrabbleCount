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
  useToast,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import NavbarItem from './Navbar.item';
import { useAuth } from '../../../contexts/Auth/useAuth';

const Navbar = () => {
  const auth = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const [isLargerThan700] = useMediaQuery('(min-width: 700px)');
  const handleDisconnect = () => {
    if (auth) {
      auth.logout();
      navigate('/', { replace: true });
      toast({
        title: 'Déconnecté',
        description: 'À très bienôt sur ScrabbleCount 👋',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }
  };
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
                {auth?.currentUser.userId && (
                  <>
                    <Link as={RouterLink} to="/games">
                      <NavbarItem name="Parties" leftIcon={<FaGamepad />} />
                    </Link>
                    <Link as={RouterLink} to="/stats">
                      <NavbarItem name="Statistiques" leftIcon={<BiStats />} />
                    </Link>
                  </>
                )}
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
                    {auth?.currentUser.userId && (
                      <>
                        <Link as={RouterLink} to="/games">
                          <MenuItem icon={<FaGamepad />}>Parties</MenuItem>
                        </Link>
                        <Link as={RouterLink} to="/stats">
                          <MenuItem icon={<BiStats />}>Statistiques</MenuItem>
                        </Link>
                      </>
                    )}
                  </MenuList>
                </>
              )}
            </Menu>
          )}
          <Spacer />
          {auth?.currentUser.userId ? (
            <Box onClick={handleDisconnect}>
              <NavbarItem name="Se déconnecter" />
            </Box>
          ) : (
            <Link as={RouterLink} to="/login">
              <NavbarItem name="Se connecter" />
            </Link>
          )}
        </Flex>

        <Divider mt={2} w="100%" mx="auto" />
      </Container>
    </Box>
  );
};

export { Navbar };
