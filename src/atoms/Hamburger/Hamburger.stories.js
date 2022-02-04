import React, { useState } from 'react';
import Hamburger from '.';

export default {
  title: 'atoms/Hamburger',
  component: Hamburger
};

const Template = () => {
  const [isOpen, toggleIsOpen] = useState(false);
  const headerClasses = [];
  if (isOpen) {
    headerClasses.push('open');
  }

  return (
    <Hamburger
      isOpen={isOpen}
      toggleIsOpen={toggleIsOpen}
      headerClasses={headerClasses}
    />
  )
};

export const Default = Template.bind({});
