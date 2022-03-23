import React from 'react';
import Menu from '.';

const categoryData = [
  { fieldValue: 'category 1' },
  { fieldValue: 'category 2' },
  { fieldValue: 'category 3' }
];

export default {
  title: 'molecules/Menu',
  component: Menu,
};

const Template = () => (
  <Menu
    categoryData={categoryData}
    hamburgerRef={null}
    isMenuOpen
    setIsMenuOpen={null}
  />
);

export const Default = Template.bind({});
