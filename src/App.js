import React, { Fragment } from 'react';
import { Redirect, Route, Switch} from 'react-router';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux';


import Temperature from "./components/Temperature";
import Light from "./components/Light";
import Wifi from "./components/Wifi";
import HomePage from './components/HomePage';


function App() {
  const auth = true;
  return (
      <Fragment>
        {!auth ? (
            <Switch>
              <Route exact component={HomePage} path = '/home'/>
                <Redirect to='/home'/>
            </Switch>
        ) : (
            <Switch>
                <Route exact component={HomePage} path = '/home'/>
                <Route exact component={Temperature} path = '/temperature' />
                <Route exact component={Light} path = '/light' />
                <Route exact component={Wifi} path = '/wifi' />
                <Redirect to='/home'/>
            </Switch>
        )
        }
      </Fragment>
  );
}

export default compose(
    withRouter,
    connect(),
)(App);
