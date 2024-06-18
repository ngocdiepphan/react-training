import React from "react";

export interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, id, name }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-serif mb-2 text-start">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className="border border-gray-300 rounded-md px-3 py-2 w-full"
      />
    </div>
  );
};

export default InputField;
