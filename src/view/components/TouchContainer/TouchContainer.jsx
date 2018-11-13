import * as React from 'react';
import { cn } from '@bem-react/classname';
import './TouchContainer.scss'
import  './touch.js'

const TouchContainerClass = cn('TouchContainer');
const TouchContainer = () => (
  <section className={TouchContainerClass()}>
    <article className={TouchContainerClass('View')}>
    </article>
    <div className={TouchContainerClass('Value')}>
      <span>Зум: <span className={TouchContainerClass('ZoomValue')}></span></span>
      <span>Яркость: <span className={TouchContainerClass('ZoomBrightness')}></span></span>
    </div>
  </section>
);
export default TouchContainer;
