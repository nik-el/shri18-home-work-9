import * as React from 'react';
import { cn } from '@bem-react/classname';
import FooterNav from '../FooterNav/FooterNav'
import './PageFooter.scss'

const pageHeaderClass = cn('PageFooter');
const PageFooter = () => (
  <footer className={pageHeaderClass()}>
    <div className={pageHeaderClass('Wrapper')}>
      <FooterNav />
      <p className={pageHeaderClass('Copyright')}>
        © 2001–2017 ООО «Яндекс»
      </p>
    </div>
  </footer>
);
export default PageFooter;
