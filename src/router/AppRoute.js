import React, { Component,Fragment } from 'react';
import { Switch,Route} from "react-router-dom";

// pages
import Home from '../pages/Home';
import Count from '../pages/Count';
import Persons from '../pages/Persons';
import Students from '../pages/Students';
import NotFound from '../pages/NotFound';
import BasicForm from '../pages/BasicForm';

class AppRoute extends Component {

  render() {
    return (
      <Fragment>

        <Switch>

          <Route exact path='/' component={Home}/>
          <Route exact path='/count' component={Count}/>
          <Route exact path='/persons' component={Persons}/>
          <Route exact path='/students' component={Students}/>
          <Route exact path='/basic-forms' component={BasicForm}/>
          <Route path='*' component={NotFound}/>

        </Switch>

      </Fragment>
    )
  }
}

export default  AppRoute;