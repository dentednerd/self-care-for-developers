import { globalCss } from '@stitches/react';
import "@fontsource/fredoka-one";
import "@fontsource/raleway";

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    fontSize: '$1',
    lineHeight: '$1',
  },

  body: {
    backgroundColor: '$bg',
    color: '$text',
    fontFamily: 'Raleway',
  },

  svg: {
    maxWidth: '100%',
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
    fontSize: '10vw',
    lineHeight: '12vw',
    margin: '0 0 1rem',
    color: '$title',
    textAlign: 'center',

    '@media(min-width: 768px)': {
      textAlign: 'left',
      fontSize: '$3',
      lineHeight: '$3',
    }
  },

  h2: {
    fontFamily: 'Raleway',
    fontSize: '8vw',
    lineHeight: '10vw',
    margin: '0 0 1rem',
    color: '$title',
    textAlign: 'center',

    '@media(min-width: 768px)': {
      textAlign: 'left',
      fontSize: '$2',
      lineHeight: '$2',
    }
  },

  a: {
    color: '$colors$link',
    textDecoration: 'none',
  },

  ul: {
    listStyleType: 'none',
    marginBottom: '$1',

    li: {
      margin: '$0 0 0 0'
    }
  },

  ".article-body": {
    p: {
      marginBottom: '$2'
    },

    ul: {
      width: 'calc(100% - 8rem)',
      margin: '0 4rem',
      listStyleType: "disc",
      marginBottom: '$2',

      li: {
        margin: '$1 0'
      }
    }
  }
});

export default globalStyles;
