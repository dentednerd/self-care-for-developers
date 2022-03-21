import * as React from 'react';
import { Link } from 'gatsby';
import LayoutTemplate from '../templates/LayoutTemplate';
import Button from '../atoms/Button';

const NotFoundPage = () => {
  return (
    <LayoutTemplate>
      <h1>Page not found</h1>
      <Link to='/'>
        <Button>
          Take me home.
        </Button>
      </Link>
    </LayoutTemplate>
  )
}

export default NotFoundPage
