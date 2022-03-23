import React from 'react';
import LazyLoadImage from '.';

export default {
  title: 'molecules/LazyLoadImage',
  component: LazyLoadImage,
};

const Template = () => (
  <LazyLoadImage
    src="https://ik.imagekit.io/surinderbhomra/Pages/logo-me.jpg"
    widthPx={400}
    srcsetSizes={[{ imageWidth: 400, viewPortWidth: 992 }, { imageWidth: 300, viewPortWidth: 768 }, { imageWidth: 200, viewPortWidth: 500 }]}
    alt="Surinder Logo"
  />
);

export const Default = Template.bind({});
