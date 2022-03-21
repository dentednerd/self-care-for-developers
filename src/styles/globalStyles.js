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
      margin: '$1 0'
    }
  },

  ".article-body": {
    p: {
      marginBottom: '$2'
    },

    ul: {
      listStyleType: "disc",
      marginBottom: '$2',

      li: {
        margin: '$1 0 $1 $1'
      }
    }
  }
});

export default globalStyles;
