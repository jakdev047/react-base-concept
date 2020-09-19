import React, { Component,Fragment } from 'react';
import { Switch,Route, Redirect} from "react-router-dom";

// pages
import Home from '../pages/Home';
import Count from '../pages/Count';
import Persons from '../pages/Persons';
import Students from '../pages/Students';
import NotFound from '../pages/NotFound';
import BasicForm from '../pages/BasicForm';
import SinglePerson from '../pages/SinglePerson';

class AppRoute extends Component {

  render() {
    return (
      <Fragment>

        <Switch>

          <Route exact path='/' render={()=> <Home/>}/>
          <Route exact path='/count' component={Count}/>
          <Route exact path='/persons' component={Persons}/>
          <Route exact path='/students' component={Students}/>
          <Route exact path='/basic-forms' component={BasicForm}/>
          <Route exact path='/single-person/:personId/:personName' component={SinglePerson}/>
          <Redirect from="/" to="/count" />
          <Route path='*' component={NotFound}/>

        </Switch>

      </Fragment>
    )
  }
}

export default  AppRoute;