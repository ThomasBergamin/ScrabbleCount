import { extendTheme } from '@chakra-ui/react';
import { StyledButton } from './common/theme/Button';
import { StyledInput } from './common/theme/Input';

const theme = extendTheme({
  components: {
    Button: StyledButton,
    Input: StyledInput,
    FormLabel: {
      baseStyle: {
        color: 'whiteAlpha.900',
      },
    },
  },
});

export default theme;
