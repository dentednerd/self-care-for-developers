import React from 'react';
import PropTypes from 'prop-types';
import useDarkMode from 'use-dark-mode';
import { darkTheme, lightTheme } from '../../stitches.config';
import Header from '../../organisms/Header';
import useCategoriesQuery from '../../hooks/useCategoriesQuery';
import globalStyles from '../../styles/globalStyles';

const LayoutTemplate = ({ location, children }) => {
  const isBrowser = () => typeof window !== 'undefined';
  const darkPreference = isBrowser() && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const darkMode = useDarkMode(darkPreference);
  const theme = darkMode.value ? darkTheme : lightTheme;

  const categoryData = useCategoriesQuery();

  globalStyles();

  return (
    <div className={theme}>
      <Header location={location} categoryData={categoryData} darkMode={darkMode} />
      <main id="content">
        {children}
      </main>
    </div>
  );
}

LayoutTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object,PropTypes.array]).isRequired,
}

export default LayoutTemplate;
