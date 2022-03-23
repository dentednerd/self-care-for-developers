import * as React from 'react';
import LayoutTemplate from '../templates/LayoutTemplate';
import HomeLink from '../atoms/HomeLink';

const NotFoundPage = () => {
  return (
    <LayoutTemplate>
      <h1>Page not found</h1>
      <HomeLink />
    </LayoutTemplate>
  )
}

export default NotFoundPage
