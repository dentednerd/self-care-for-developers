import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { ToggleMenuProvider } from '../src/contexts/ToggleMenu';
import { getCssText, darkTheme, lightTheme } from '../src/stitches.config';
import globalStyles from '../src/styles/globalStyles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark, appBg: 'hsl(239, 43%, 23%)' },
    darkClass: 'dark-mode',
    light: { ...themes.normal, appBg: 'hsl(8, 79%, 86%)' },
    lightClass: 'light-mode',
    stylePreview: true
  },
  layout: 'centered'
}

export const decorators = [
  (Story, context) => {
    globalStyles();
    const theme = useDarkMode() ? darkTheme : lightTheme;
    return (
      <ToggleMenuProvider>
        <style
        id="stitches"
        dangerouslySetInnerHTML={{
          __html: getCssText(),
        }}
      />
        <div className={theme}>
          <Story {...context} />
        </div>
      </ToggleMenuProvider>
    );
  }
]
