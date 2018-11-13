import * as React from 'react';
import { cn } from '@bem-react/classname';
import './FooterNav.scss'

const footerNavClass = cn('FooterNav');
const FooterNav = () => (
  <ul className={footerNavClass(null, ['PageFooter-Nav'])}>
    <li className={footerNavClass('Item')}>
      <a href="#" className={footerNavClass('Link')}>Помощь</a>
    </li>
    <li className={footerNavClass('Item')}>
      <a href="#" className={footerNavClass('Link')}>Обратная связь</a>
    </li>
    <li className={footerNavClass('Item')}>
      <a href="#" className={footerNavClass('Link')}>Разработчикам</a>
    </li>
    <li className={footerNavClass('Item')}>
      <a href="#" className={footerNavClass('Link')}>Условия использования</a>
    </li>
    <li className={footerNavClass('Item')}>
      <a href="/data/license.pdf" className={footerNavClass('Link')}>Лицензия</a>
    </li>
  </ul>
);
export default FooterNav;
