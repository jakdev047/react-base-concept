import React from 'react';
import PropTypes from 'prop-types'; 

const TextInput = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input className={props.error ? 'form-control is-invalid' : 'form-control' }
            type={props.type}
            placeholder={props.placeholder} 
            name={props.name} 
            id={props.name}
            value={props.value} 
            onChange = {props.onChange}
      />
      {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

TextInput.defaultProps = {
  type:'text',
  label:'',
  placeholder:''
}

export default TextInput; 