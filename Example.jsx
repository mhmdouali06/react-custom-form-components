import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "./TextInput"; // Make sure to import your components
import TextArea from "./TextArea";
import SelectInput from "./SelectInput";
import MultiSelect from "./MultiSelect";
import CheckBox from "./CheckBox";

// Define your validation schema using Yup
const schema = Yup.object().shape({
  textField: Yup.string().required("This field is required"),
  textArea: Yup.string().required("This field is required"),
  selectField: Yup.string().required("This field is required"),
  multiSelectField: Yup.array().min(1, "At least one option must be selected"),
  checkBoxField: Yup.bool().oneOf([true], "This field is required"),
});

// Define options for select and multi-select inputs
const selectOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

const multiSelectOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

const Example = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur", // Validate on blur
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="p-3">
        <TextInput name="textField" label="Text Field" isRequired />

        <TextArea name="textArea" label="Text Area" isRequired />

        <SelectInput
          name="selectField"
          label="Select Field"
          options={selectOptions}
          isRequired
          placeholder="Select an option"
        />

        <MultiSelect
          name="multiSelectField"
          label="Multi Select Field"
          options={multiSelectOptions}
          isRequired
          placeholder="Select multiple options"
        />

        <CheckBox name="checkBoxField" label="Check Box Field" isRequired />

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default Example;
