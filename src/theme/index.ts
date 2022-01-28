import { Theme } from '@chakra-ui/react';

export const theme: Partial<Theme> = {
  styles: {
    global: (props) => ({
      'html, body': {
        fontSize: 'sm',
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        bgColor: props.colorMode === 'dark' ? 'blue.800' : 'blue.400',
      },
    }),
  },
};
