import * as React from 'react';
import LayoutTemplate from '../templates/LayoutTemplate';
import HomeButton from '../atoms/HomeButton';

const NotFoundPage = () => {
  return (
    <LayoutTemplate>
      <h1>Page not found</h1>
      <HomeButton />
    </LayoutTemplate>
  )
}

export default NotFoundPage
