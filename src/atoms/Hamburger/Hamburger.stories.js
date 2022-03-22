import React, { useState } from 'react';
import Hamburger from '.';

export default {
  title: 'atoms/Hamburger',
  component: Hamburger
};

const Template = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Hamburger
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    />
  )
};

export const Default = Template.bind({});
