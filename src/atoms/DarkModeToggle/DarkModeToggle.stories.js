import React, { useState, useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import addons from '@storybook/addons';
import DarkModeToggle from '.';

export default {
  title: 'atoms/DarkModeToggle',
  component: DarkModeToggle
};

const channel = addons.getChannel();

const Example = () => {
  const [isDark, setIsDark] = useState(useDarkMode());

  useEffect(() => {
    channel.on('DARK_MODE', setIsDark);
    return () => channel.off('DARK_MODE', setIsDark)
  }, [channel, setIsDark]);

  const darkMode = {
    value: isDark,
    enable: () => setIsDark(true),
    disable: () => setIsDark(false),
    toggle: () => setIsDark(!isDark)
  };

  return <DarkModeToggle darkMode={darkMode} />;
}

export const Default = Example.bind({});
