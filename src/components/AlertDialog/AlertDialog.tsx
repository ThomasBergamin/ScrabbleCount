import {
  AlertDialog as ChakraAlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';

interface IAlertDialog {
  title: string;
  body: string;
  isOpen: boolean;
  onClose: () => void;
  onValidate: () => void;
}

const AlertDialog = ({
  title,
  body,
  onClose,
  isOpen,
  onValidate,
}: IAlertDialog) => {
  const cancelRef = useRef(null);

  return (
    <ChakraAlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent background="gray.600" color="whiteAlpha.900">
        <AlertDialogHeader>{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>{body}</AlertDialogBody>
        <AlertDialogFooter>
          <Button
            variant="ghost"
            _hover={{
              background: 'gray.800',
            }}
            backgroundColor="gray.700"
            boxShadow="0 1px 0 hsla(0, 0%, 100%, .1), inset 0 1px 1px hsla(0, 0%, 0%, 0.5)"
            ref={cancelRef}
            onClick={onClose}
          >
            Non
          </Button>
          <Button
            boxShadow="inset 0 1px 0 hsla(3, 53%, 46%, .9),  0 2px 2px hsla(0, 0%, 0%, 0.7)"
            colorScheme="red"
            ml={3}
            onClick={onValidate}
          >
            Oui
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ChakraAlertDialog>
  );
};

export default AlertDialog;
