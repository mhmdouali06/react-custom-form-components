import React from "react";
import PropTypes from "prop-types";

const Textarea = ({
  label,
  name,
  register,
  errors,
  isRequired = false,
  ...rest
}) => {
  return (
    <div className="mb-3">
      {label && (
        <label
          htmlFor={name}
          className={`form-label ${isRequired ? "required" : ""}`}
        >
          {label}
        </label>
      )}
      <textarea
        className={`form-control ${errors && errors[name] ? "is-invalid" : ""}`}
        name={name}
        rows={3}
        {...rest}
        {...register(name)}
      />
      {errors && errors[name] && (
        <div className="invalid-feedback">
          <span role="alert">{errors[name]?.message}</span>
        </div>
      )}
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  isRequired: PropTypes.bool,
};

export default Textarea;
