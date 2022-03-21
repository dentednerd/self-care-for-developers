import React from 'react';
import { Link } from 'gatsby';
import Button from '../Button';

export default function HomeButton() {
  return (
    <Link to='/'>
      <Button home>
        Take me home.
      </Button>
    </Link>
  )
}
