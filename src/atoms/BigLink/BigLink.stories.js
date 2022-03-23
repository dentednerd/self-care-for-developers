import React from 'react';
import BigLink from '.';

export default {
  title: 'atoms/BigLink',
  component: BigLink,
  argTypes: {
    home: {
      control: {
        type: 'boolean'
      }
    },
    to: {
      control: {
        type: 'text'
      }
    }
  }
};

const Template = ({ home, to }) => (
  <BigLink to={to} home={home}>
    I am BigLink.
  </BigLink>
);

export const Default = Template.bind({});

Default.args = {
  home: false,
  to: '/'
}
