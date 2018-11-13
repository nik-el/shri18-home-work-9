import * as React from 'react';
import { cn } from '@bem-react/classname';
import './MainNav.scss'

const mainNavClass = cn('MainNav');
const MainNav = () => (
  <nav className={mainNavClass(null, ['PageHeader-Nav'])}>
    <label htmlFor="show-menu" className={mainNavClass('Toggle')}>
          <span className={mainNavClass('Icon')} role="button">
            <span className="VisuallyHidden">
              Меню
            </span>
          </span>
    </label>
    <input type="checkbox" id="show-menu" />

      <ul className={mainNavClass('Items')}>
        <li className={mainNavClass('Item')}>
          <a className={mainNavClass('Link')} href="#">События</a>
        </li>
        <li className={mainNavClass('Item')}>
          <a className={mainNavClass('Link')} href="#">Сводка</a>
        </li>
        <li className={mainNavClass('Item')}>
          <a className={mainNavClass('Link')} href="#">Устройства</a>
        </li>
        <li className={mainNavClass('Item')}>
          <a className={mainNavClass('Link')} href="#">Сценарии</a>
        </li>
        <li className={mainNavClass('Item')}>
          <a className={mainNavClass('Link', {active: true})} href="#">Камера</a>
        </li>
        <li className={mainNavClass('Item')}>
          <a className={mainNavClass('Link')} href="#">Видеонаблюдение</a>
        </li>
      </ul>
  </nav>
);
export default MainNav;
