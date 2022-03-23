import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import './DarkModeToggle.css';

const DarkModeToggle = ({ darkMode }) => (
  <Toggle
    onChange={() => darkMode.value ? darkMode.disable() : darkMode.enable()}
    checked={darkMode.value}
    icons={{ checked: "☾", unchecked: "☀" }}
    role="switch"
    aria-label="Toggle dark mode"
    aria-checked={darkMode.value ? "true" : "false"}
  />
);

DarkModeToggle.propTypes = {
  darkMode: PropTypes.shape({
    value: PropTypes.bool.isRequired,
    enable: PropTypes.func.isRequired,
    disable: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
  })
}

export default DarkModeToggle;
