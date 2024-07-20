import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const SearchSelect = ({
  label,
  name,
  placeholder,
  isRequired = false,
  isDisabled = false,
  options = [],
  register,
  errors,
}) => {
  const { onChange, onBlur, ref } = register(name);

  const handleChange = (selectedOption) => {
    onChange({
      target: {
        name,
        value: selectedOption ? selectedOption.value : "",
      },
    });
  };

  return (
    <div className="w-100 mb-3">
      {label && (
        <label className={`form-label ${isRequired ? "required" : ""}`}>
          {label}
        </label>
      )}

      <Select
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        }}
        menuPlacement="bottom"
        options={options}
        name={name}
        isDisabled={isDisabled}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={onBlur}
        ref={ref}
        className={`react-select-container ${
          errors && errors[name] ? "is-invalid" : ""
        }`}
      />
      {errors && errors[name] && (
        <div className="invalid-feedback">
          <span role="alert">{errors[name]?.message}</span>
        </div>
      )}
    </div>
  );
};

SearchSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  options: PropTypes.array,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
};

export default SearchSelect;
