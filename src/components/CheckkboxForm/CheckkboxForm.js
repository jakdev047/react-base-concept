import React from 'react';

import PropTypes from 'prop-types'; 

const CheckkboxForm = props => {
  return (
    <div className="form-group">
      <input className="form-check-input" type={props.type} name={props.name} checked={props.value} onChange={props.onChange} />
      {props.children}
    </div>
  );
};

CheckkboxForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // value: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

CheckkboxForm.defaultProps = {
  type:'checkbox'
}

export default CheckkboxForm; 