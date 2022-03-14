import { globalCss } from '@stitches/react';
import "@fontsource/fredoka-one";
import "@fontsource/raleway";

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontSize: '$1'
  },

  body: {
    backgroundColor: '$bg',
    color: '$text',
    fontFamily: 'Raleway',
  },

  main: {
    margin: '4rem auto 0',
    padding: '1rem',
    maxWidth: '768px',
  },

  p: {
    marginBottom: '$1'
  },

  h1: {
    fontFamily: 'Fredoka One',
    fontSize: '$4',
    margin: '0 0 1rem',
    color: '$title'
  },

  h2: {
    fontFamily: 'Raleway',
    fontSize: '$2',
    margin: '0 0 1rem',
    color: '$title'
  },

  a: {
    color: '$green500',
    textDecoration: 'none',

    '&:visited': {
      color: '$gold500'
    }
  },

  ul: {
    listStyleType: 'none',

    li: {
      margin: '$1 0'
    }
  }
});

export default globalStyles;
