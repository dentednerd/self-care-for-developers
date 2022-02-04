import React from 'react';
import Nav from '.';

export default {
  title: 'molecules/Nav',
  component: Nav,
};

const Template = () => <Nav headerClasses={['open']} />;

export const Default = Template.bind({});
