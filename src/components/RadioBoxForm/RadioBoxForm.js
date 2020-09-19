import React from 'react';

import PropTypes from 'prop-types';

const RadioBoxForm = props => {
  return (
    <div className="form-group">
      <input className="form-check-input" type={props.type} name={props.name} value={props.value} onChange={props.onChange} />
      {props.children}
    </div>
  );
};

RadioBoxForm.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

RadioBoxForm.defaultProps = {
  type:'radio'
}

export default RadioBoxForm;