import React from 'react';
import HeroGrid from '.';

export default {
  title: 'molecules/HeroGrid',
  component: HeroGrid,
  argTypes: {
    tag: {
      control: {
        type: 'text'
      }
    },
    title: {
      control: {
        type: 'text'
      }
    }
  }
};

const Template = ({ tag, title }) => <HeroGrid tag={tag} title={title} />;

export const Default = Template.bind({});

Default.args = {
  tag: '',
  title: ''
}
