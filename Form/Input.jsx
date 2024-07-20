import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  register,
  label,
  isRequired = false,
  name,
  className,
  errors,
  ...rest
}) => {
  return (
    <div className="mb-3 w-100">
      <label
        htmlFor={name}
        className={`form-label ${isRequired ? "required" : ""}`}
      >
        {label}
      </label>
      <input
        className={`form-control ${className} ${
          errors && errors[name] ? "is-invalid" : ""
        } ${type === "color" ? "form-control-color" : ""}`}
        type={type}
        name={name}
        required={isRequired}
        {...rest}
        {...register(name)}
      />
      {errors && errors[name] && (
        <div className="invalid-feedback">{errors[name]?.message}</div>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
