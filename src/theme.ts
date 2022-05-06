import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Input: {
      baseStyle: {
        field: {
          color: 'whiteAlpha.900',
        },
      },
      defaultProps: {
        focusBorderColor: 'teal.500',
      },
    },
    FormLabel: {
      baseStyle: {
        color: 'whiteAlpha.900',
      },
    },
  },
});

export default theme;
