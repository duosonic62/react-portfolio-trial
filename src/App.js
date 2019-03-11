import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import './App.css';

import Counter from './containers/counter';
import Home from './containers/Home/Home';

import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        {/* <NavLink
          to="/counter"
          exact={true}>Counter</NavLink> */}
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
