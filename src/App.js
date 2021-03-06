import React, { Component } from 'react';
import PageHeader from './view/components/PageHeader/PageHeader';
import PageFooter from './view/components/PageFooter/PageFooter';
import PageMain from './view/components/PageMain/PageMain';
import './scss/style.scss'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader />
        <PageMain />
        <PageFooter />
      </div>
    );
  }
}

export default App;
