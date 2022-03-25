import React from 'react';
import LazyLoadImage from '.';

export default {
  title: 'molecules/LazyLoadImage',
  component: LazyLoadImage,
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    },
    alt: {
      control: {
        type: 'object'
      }
    },
    defaultWidthPx: {
      control: {
        type: 'number'
      }
    },
    sizes: {
      control: {
        type: 'object'
      }
    },
    srcsetSizes: {
      control: {
        type: 'array'
      }
    },
    widthPx: {
      control: {
        type: 'number'
      }
    },
  }
};

const Template = ({ src, alt, defaultWidthPx, sizes, srcsetSizes, widthPx }) => (
  <LazyLoadImage
    src={src}
    widthPx={widthPx}
    srcsetSizes={srcsetSizes}
    alt={alt}
    defaultWidthPx={defaultWidthPx}
    sizes={sizes}
  />
);

export const Default = Template.bind({});

Default.args = {
  src: "http://placekitten.com/400/400",
  widthPx: 400,
  srcsetSizes: [{ imageWidth: 400, viewPortWidth: 992 }, { imageWidth: 300, viewPortWidth: 768 }, { imageWidth: 200, viewPortWidth: 500 }],
  alt: "A cat from placekitten.com"
}
