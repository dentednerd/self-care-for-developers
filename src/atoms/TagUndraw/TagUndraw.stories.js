import React from 'react';
import TagUndraw from '.';

export default {
  title: 'atoms/TagUndraw',
  component: TagUndraw,
  argTypes: {
    tag: {
      control: {
        type: 'text'
      }
    }
  }
};

const Template = ({ tag }) => <TagUndraw tag={tag} />;

export const Default = Template.bind({});

Default.args = {
  tag: 'posture'
}
