import React from 'react';
import Nav from '.';

const categoryData = [
  { fieldValue: 'category 1' },
  { fieldValue: 'category 2' },
  { fieldValue: 'category 3' }
];

export default {
  title: 'molecules/Nav',
  component: Nav,
};

const Template = () => (
  <Nav
    categoryData={categoryData}
    hamburgerRef={null}
    isMenuOpen
    setIsMenuOpen={null}
  />
);

export const Default = Template.bind({});
