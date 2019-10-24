import React, { Component } from 'react';
import '../src/index.css'
import Cities from '../src/components/containers/Cities'
import LandingPage from '../src/components/containers/LandingPage'
import LandingContent from './components/Contents/LandingContent'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <LandingPage />
        <Route exact path='/' component={LandingContent} />
        <Route path='/cities' component={Cities} />
      </BrowserRouter>
    );
  }
}

export default App;
