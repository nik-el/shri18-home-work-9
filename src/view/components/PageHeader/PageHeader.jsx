import * as React from 'react';
import { cn } from '@bem-react/classname';
import MainNav from '../MainNav/MainNav'
import './PageHeader.scss'

const pageHeaderClass = cn('PageHeader');
const PageHeader = () => (
  <header className={pageHeaderClass()}>
    <a className={pageHeaderClass('Logo')} href="#">
    </a>
    <MainNav />
  </header>
);
export default PageHeader;
