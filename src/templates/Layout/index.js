import React from 'react';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql } from 'gatsby';
import useDarkMode from 'use-dark-mode';
import { darkTheme, lightTheme } from '../../stitches.config';
import Header from '../../organisms/Header';
import globalStyles from '../../styles/globalStyles';

const Layout = ({ children }) => {
  const isBrowser = () => typeof window !== 'undefined';
  const darkPreference = isBrowser() && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const darkMode = useDarkMode(darkPreference);
  const theme = darkMode.value ? darkTheme : lightTheme;

  globalStyles();

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log({ data }); // Self Care For Developers

  return (
    <div className={theme}>
      <Header darkMode={darkMode} />
      <main>
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Layout;
