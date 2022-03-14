import React from 'react';
import PropTypes from 'prop-types';
import useDarkMode from 'use-dark-mode';
import { darkTheme, lightTheme } from '../../stitches.config';
import Header from '../../organisms/Header';
import globalStyles from '../../styles/globalStyles';

const LayoutTemplate = ({ children }) => {
  const isBrowser = () => typeof window !== 'undefined';
  const darkPreference = isBrowser() && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const darkMode = useDarkMode(darkPreference);
  const theme = darkMode.value ? darkTheme : lightTheme;

  globalStyles();

  return (
    <div className={theme}>
      <Header darkMode={darkMode} />
      <main>
        {children}
      </main>
    </div>
  );
}

LayoutTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object,PropTypes.array]).isRequired,
}

export default LayoutTemplate;
