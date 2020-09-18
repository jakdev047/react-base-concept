import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';


class NotFound extends Component {

  render() {
    return (
      <Fragment>
        <TopNavigation title="404" />
        <h2 style={{fontSize:'72px',textAlign:'center'}}>404!</h2>
      </Fragment>
    )
  }
}

export default NotFound;
