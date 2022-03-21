import { globalCss } from '@stitches/react';
import "@fontsource/fredoka-one";
import "@fontsource/raleway";
import "@fontsource/raleway/700.css";

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
    fontSize: '$3',
    lineHeight: '$3',
    margin: '0 0 1rem',
    color: '$title',
    textAlign: 'center',

    '@media(min-width: 768px)': {
      textAlign: 'left',
    }
  },

  h2: {
    fontFamily: 'Raleway',
    fontSize: '$2',
    fontWeight: 700,
    lineHeight: '$2',
    margin: '0 0 1rem',
    color: '$title',
    textAlign: 'center',

    '@media(min-width: 768px)': {
      textAlign: 'left',
    }
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
