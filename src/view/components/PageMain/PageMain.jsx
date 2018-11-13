import * as React from 'react';
import { cn } from '@bem-react/classname';
import './PageMain.scss'
import { RegistryConsumer } from '@bem-react/di'

const pageMainClass = cn('PageMain');
const PageMain = () => (
  <main className={pageMainClass()}>
    <RegistryConsumer>
      {registries => {
        const cnApp = cn('App');
        const cnTouchContainer = cn('TouchContainer');
        const registry = registries[cnApp()];
        const TouchContainer = registry.get(cnTouchContainer());
        return <TouchContainer />
      }}
    </RegistryConsumer>
  </main>
);
export default PageMain;
