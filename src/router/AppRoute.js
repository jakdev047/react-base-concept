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
import FormikProject from '../pages/FormikProject';
import Registration from '../pages/Registration';
import FunctionHelper from '../pages/FunctionHelper';
import ReduceHelper from '../pages/ReduceHelper';
import Regex from '../pages/Regex';
import Projects from '../pages/Projects';
import JsToExcel from '../pages/JsToExcel';
import ExcelToJs from '../pages/ExcelToJs';
import FileBase64Pages from '../pages/FileBase64';
import ReactFlowPages from '../pages/ReactFlowPages';
import ReactDynamicTable from '../pages/ReactDynamicTable';
import ComponentsModule from '../pages/Components';
import AllTypeForm from '../pages/AllTypeForm';

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
          <Route exact path='/formik-project' component={FormikProject}/>
          <Route exact path='/registration' component={Registration}/>
          <Route exact path='/function-helper' component={FunctionHelper}/>
          <Route exact path='/reduce-helper' component={ReduceHelper}/>
          <Route exact path='/regular-expression' component={Regex}/>
          <Route exact path='/all-projects' component={Projects}/>
          <Route exact path='/js-to-excel' component={JsToExcel}/>
          <Route exact path='/excel-to-js' component={ExcelToJs}/>
          <Route exact path='/file-base64' component={FileBase64Pages}/>
          <Route exact path='/react-flow' component={ReactFlowPages}/>
          <Route exact path='/react-dynamic-table' component={ReactDynamicTable}/>
          <Route exact path='/components' component={ComponentsModule}/>
          <Route exact path='/all-input-fields' component={AllTypeForm}/>
          <Redirect from="/" to="/count" />
          <Route path='*' component={NotFound}/>

        </Switch>

      </Fragment>
    )
  }
}

export default  AppRoute;