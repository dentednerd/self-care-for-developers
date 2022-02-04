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

  h1: {
    fontFamily: 'Fredoka One',
    fontSize: '$4',
    margin: '4rem 0',
    color: '$title'
  }
});

export default globalStyles;
