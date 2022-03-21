import React from 'react';
import Button from '.';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    home: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = ({ home }) => (
  <Button home={home}>
    I am Button
  </Button>
);

export const Default = Template.bind({});

Default.args = {
  home: false
}
