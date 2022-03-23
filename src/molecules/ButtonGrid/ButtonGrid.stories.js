import React from 'react';
import ButtonGrid from '.';
import Button from '../../atoms/Button';

export default {
  title: 'molecules/ButtonGrid',
  component: ButtonGrid,
};

const Template = () => (
  <ButtonGrid>
    <Button>Let's talk about this.</Button>
    <Button>Let's talk about that.</Button>
    <Button>Good mythical morning!</Button>
    <Button home>Take me home.</Button>
  </ButtonGrid>
);

export const Default = Template.bind({});
