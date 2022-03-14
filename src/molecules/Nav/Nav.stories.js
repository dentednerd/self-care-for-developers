import React from 'react';
import Nav from '.';

const categoryData = [
  { fieldValue: 'one' },
  { fieldValue: 'two' },
  { fieldValue: 'three' }
];

export default {
  title: 'molecules/Nav',
  component: Nav,
};

const Template = () => <Nav categoryData={categoryData} headerClasses={['open']} />;

export const Default = Template.bind({});
