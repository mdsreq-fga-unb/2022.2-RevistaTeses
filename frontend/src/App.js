import React, { Component } from 'react';
// import RoutesApp from '../../backend/routes';
import Login from './pages/login';

class App extends Component {
  render() {
    return (
      <div classname="app">
        {/* <RoutesApp> */}
          <Login/>
        {/* </RoutesApp> */}
      </div>
    );
  }
}

export default App;
