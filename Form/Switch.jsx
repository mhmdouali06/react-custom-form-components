import React from "react";
import PropTypes from "prop-types";

const Switch = ({
  label,
  name,
  register,
  errors,
  isRequired = false,
  ...rest
}) => {
  return (
    <div className="mb-3 form-check form-switch">
      <input
        style={{ transform: "scale(1.5)" }}
        className={`form-check-input ${
          errors && errors[name] ? "is-invalid" : ""
        }`}
        type="checkbox"
        name={name}
        id={name}
        {...rest}
        {...register(name)}
      />
      <label
        htmlFor={name}
        className={`form-check-label ms-2 ${isRequired ? "required" : ""}`}
      >
        {label}
      </label>
      {errors && errors[name] && (
        <div className="invalid-feedback">
          <span role="alert">{errors[name]?.message}</span>
        </div>
      )}
    </div>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  isRequired: PropTypes.bool,
};

export default Switch;
