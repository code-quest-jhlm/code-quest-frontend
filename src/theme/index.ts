import { createTheme, Button, Input } from '@mantine/core';

const cqTheme = createTheme({
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 'bold',
  },
  primaryColor: 'violet',
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: 'md',
      },
      styles: {
        inner: {
          fontFamily: 'Poppins',
          fontSize: '1rem',
          fontWeight: '600',
        },
      },
    }),
    Input: Input.extend({
      styles: {
        input: {
          backgroundColor: '#202225',
          border: 'none',
        },
      },
    }),
  },
});

export default cqTheme;
