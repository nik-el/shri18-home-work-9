import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppDesktop from './App@desktop';
import AppTouch from './App@mobile';
import * as serviceWorker from './serviceWorker';

let isTouchDevice = false;
if ( window.innerWidth < 680) {
  isTouchDevice = true;
}

ReactDOM.render(
  isTouchDevice ? <AppTouch /> : <AppDesktop />,
  document.getElementById('root'),
);

serviceWorker.unregister();
