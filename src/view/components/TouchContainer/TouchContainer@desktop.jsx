import * as React from 'react';
import { cn } from '@bem-react/classname';
import './TouchContainer.scss'
import touch from  './touch.js'

const TouchContainerClass = cn('TouchContainer');
const TouchContainer = () => (
  <section className={TouchContainerClass()}>
    <article className={TouchContainerClass('View')}>
    </article>
  </section>
);
export default TouchContainer;
