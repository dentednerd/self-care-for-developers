import { createStitches, createTheme } from '@stitches/react';
import "@fontsource/fredoka-one";
import "@fontsource/raleway";

export const { styled, css, getCssText } = createStitches({
  theme: {
    fonts: {
      Fredoka: 'Fredoka One',
      Raleway: 'Raleway'
    },
    fontSizes: {
      1: '16px',
      2: '24px',
      3: '32px',
      4: '48px'
    },
    space: {
      1: '16px',
      2: '24px',
      3: '32px',
      4: '48px'
    },
    radii: {
      1: '16px',
      2: '24px',
      3: '32px',
      4: '48px'
    },
    colors: {
      white: 'hsl(0, 100%, 100%)',
      red900: 'hsl(8, 79%, 96%)', // provincial
      red800: 'hsl(8, 79%, 86%)', // mandyspink
      red700: 'hsl(8, 79%, 76%)', // wewak
      red600: 'hsl(8, 79%, 66%)', // sienna
      blue900: 'hsl(239, 43%, 93%)', // snuff
      blue800: 'hsl(239, 43%, 83%)', // periwinkle
      blue700: 'hsl(239, 43%, 73%)', // bluebell
      blue600: 'hsl(239, 43%, 63%)', // marguerite
      blue500: 'hsl(239, 43%, 53%)', // blueviolet
      blue400: 'hsl(239, 43%, 43%)', // chambray
      blue300: 'hsl(239, 43%, 33%)',// jacarta
      blue200: 'hsl(239, 43%, 23%)', // portgore
      blue100: 'hsl(239, 43%, 13%)', // ebony
      green900: 'hsl(163, 37%, 97%)', // catskill
      green800: 'hsl(163, 37%, 87%)', // skeptic
      green700: 'hsl(163, 37%, 77%)', // sinbad
      green600: 'hsl(163, 37%, 67%)', // montecarlo
      green500: 'hsl(163, 37%, 57%)', // tradewind
      gold900: 'hsl(38, 53%, 91%)', // parchment
      gold800: 'hsl(38, 53%, 81%)', // raffia
      gold700: 'hsl(38, 53%, 71%)', // brandy
      gold600: 'hsl(38, 53%, 61%)', // sundance
      gold500: 'hsl(38, 53%, 51%)', // tussock
      gold400: 'hsl(38, 53%, 41%)', // luxorgold
    }
  },
});

export const darkTheme = createTheme('dark-mode', {
  colors: {
    accent: '$blue300',
    bg: '$blue200',
    text: '$white',
    title: '$red700',
    titleHover: '$red600',
    shadow: '$blue400'
  },
});

export const lightTheme = createTheme('light-mode', {
  colors: {
    accent: '$red900',
    bg: '$white',
    text: '$blue200',
    title: '$blue600',
    titleHover: '$blue500',
    shadow: '$red800'
  },
})
