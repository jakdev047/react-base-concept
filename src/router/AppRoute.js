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
import Uncontrol from '../pages/Uncontrol';
import ControlForm from '../pages/ControlForm';
import Users from '../pages/Users';
import TransitionItem from '../pages/TransitionItem';
import FormikForm from '../pages/FormikForm';
import FormikComponent from '../pages/FormikComponent';

class AppRoute extends Component {

  render() {
    return (
      <Fragment>

        <Switch>

          <Route exact path='/' render={()=> <Home/>}/>
          <Route exact path='/count' component={Count}/>
          <Route exact path='/users' component={Users}/>
          <Route exact path='/persons' component={Persons}/>
          <Route exact path='/students' component={Students}/>
          <Route exact path='/forms' component={BasicForm}/>
          <Route exact path='/single-person/:personId/:personName' component={SinglePerson}/>
          <Route exact path='/uncontrol-form' component={Uncontrol}/>
          <Route exact path='/control-form' component={ControlForm}/>
          <Route exact path='/transion-effect' component={TransitionItem}/>
          <Route exact path='/formik-form' component={FormikForm}/>
          <Route exact path='/formik-component' component={FormikComponent}/>
          <Redirect from="/" to="/count" />
          <Route path='*' component={NotFound}/>

        </Switch>

      </Fragment>
    )
  }
}

export default  AppRoute;