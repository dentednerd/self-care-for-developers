// adapted from https://www.surinderbhomra.com/Blog/2020/02/07/Lazyload-Responsively-Serve-External-Images-Gatsby

import React from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from '../VisibilitySensor'

export default function LazyLoadImage(props) {
  let srcSetAttributeValue = '';
  let sanitizedImageSrc = props.src.replace(' ', '%20');

  // Iterate through the array of values from the 'srcsetSizes' array property.
  if (props.srcsetSizes !== undefined && props.srcsetSizes.length > 0) {
    for (let i = 0; i < props.srcsetSizes.length; i++) {
      srcSetAttributeValue += `${sanitizedImageSrc}?tr=w-${props.srcsetSizes[i].imageWidth} ${props.srcsetSizes[i].viewPortWidth}w`;

      if (props.srcsetSizes.length - 1 !== i) {
        srcSetAttributeValue += ', ';
      }
    }


  return (
      <VisibilitySensor key={sanitizedImageSrc} delayedCall={true} partialVisibility={true} once>
        {({isVisible}) =>
        <>
          {isVisible ?
            <img src={`${sanitizedImageSrc}?tr=w-${props.widthPx}`}
                  alt={props.alt}
                  sizes={props.sizes}
                  srcSet={srcSetAttributeValue} /> :
            <img src={`${sanitizedImageSrc}?tr=w-${props.defaultWidthPx}`}
                  alt={props.alt} />}
          </>
        }
      </VisibilitySensor>
  )
}
}

LazyLoadImage.propTypes = {
  alt: PropTypes.string,
  defaultWidthPx: PropTypes.number,
  sizes: PropTypes.string,
  src: PropTypes.string,
  srcsetSizes: PropTypes.arrayOf(
    PropTypes.shape({
      imageWidth: PropTypes.number,
      viewPortWidth: PropTypes.number
    })
  ),
  widthPx: PropTypes.number
}

LazyLoadImage.defaultProps = {
  alt: ``,
  defaultWidthPx: 50,
  sizes: `50vw`,
  src: ``,
  widthPx: 50
}
