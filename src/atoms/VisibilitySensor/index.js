// adapted from https://www.surinderbhomra.com/Blog/2020/02/07/Lazyload-Responsively-Serve-External-Images-Gatsby

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VSensor from 'react-visibility-sensor';

export default function VisibilitySensor({ once, children, ...theRest }) {
  const [active, setActive] = useState(false);

  return (
    <VSensor
      active={active}
      onChange={isVisible =>
        once &&
        isVisible &&
        setActive(false)
      }
      {...theRest}
    >
      {({ isVisible }) => children({ isVisible })}
    </VSensor>
  );

}

VisibilitySensor.propTypes = {
  once: PropTypes.bool,
  children: PropTypes.func.isRequired
};

VisibilitySensor.defaultProps = {
  once: false
};
