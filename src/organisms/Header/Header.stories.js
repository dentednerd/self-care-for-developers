import React, { useState, useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import addons from '@storybook/addons';
import Header from '.';

const categoryData = [
  { fieldValue: 'one' },
  { fieldValue: 'two' },
  { fieldValue: 'three' }
];

export default {
  title: 'organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  }
};

const channel = addons.getChannel();

const Template = () => {
  const [isDark, toggleIsDark] = useState(useDarkMode());

  useEffect(() => {
    channel.on('DARK_MODE', toggleIsDark);
    return () => channel.off('DARK_MODE', toggleIsDark);
  }, [channel, toggleIsDark]);

  const darkMode = {
    value: isDark,
    enable: () => toggleIsDark(true),
    disable: () => toggleIsDark(false),
    toggle: () => (toggleIsDark(!isDark))
  }
  return (
    <Header categoryData={categoryData} darkMode={darkMode} />
  )
};

export const Default = Template.bind({});
