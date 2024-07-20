import React from "react";
import PropTypes from "prop-types";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const TextEditor = ({
  name,
  register,
  label,
  errors,
  isRequired = false,
  ...rest
}) => {
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    register(name, { value: data, required: isRequired });
  };
  return (
    <div className="mb-3 w-100">
      <label
        htmlFor={name}
        className={`form-label ${isRequired ? "required" : ""}`}
      >
        {label}
      </label>
      <div
        className={`form-control ${errors && errors[name] ? "is-invalid" : ""}`}
      >
        <CKEditor
          editor={ClassicEditor}
          onChange={handleEditorChange}
          {...rest}
        />
      </div>
      {errors && errors[name] && (
        <div className="invalid-feedback">{errors[name]?.message}</div>
      )}
    </div>
  );
};

TextEditor.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  label: PropTypes.string,
  errors: PropTypes.object,
  isRequired: PropTypes.bool,
};

export default TextEditor;
