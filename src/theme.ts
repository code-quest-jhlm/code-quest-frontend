import { createTheme, Button } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
  },
  primaryColor: 'violet',
  components: {
    Button: Button.extend({
      styles: {
        inner: {
          fontFamily: 'Poppins',
          fontSize: '1rem',
          fontWeight: '600',
        },
      },
    }),
  },
});
