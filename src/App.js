import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Link from '@material-ui/core/Link';

import './App.css';
import Counter from './containers/counter';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        {/* <NavLink
          to="/counter"
          exact={true}>Counter</NavLink> */}
        <Link component={NavLink} to="/counter" exact={true}>
          Link
        </Link>
        <Switch>
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    );
  }
}

export default App;
