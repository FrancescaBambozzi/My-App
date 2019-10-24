import React, { Component } from 'react';
import '../src/index.css'
import Cities from '../src/components/containers/Cities'
import LandingPage from '../src/components/containers/LandingPage'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={LandingPage} />
        <Route path='/cities' component={Cities} />
      </BrowserRouter>
    );
  }
}

export default App;
