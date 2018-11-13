import * as React from 'react';
import { cn } from '@bem-react/classname';
import './PageMain.scss'
import TouchContainer from '../TouchContainer/TouchContainer';

const pageMainClass = cn('PageMain');
const PageMain = () => (
  <main className={pageMainClass()}>
    <TouchContainer />
  </main>
);
export default PageMain;
