import * as React from 'react';
import './Link.scss'
const Link = ({ children, className }) => (
  <a className={className} href='#'>
    {children}
  </a>
);

export default Link;
