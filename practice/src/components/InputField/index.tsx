import React from "react";

export interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  variant: "primary" | "secondary";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
  placeholder: string;
}

const InputField = ({
  label,
  type,
  name,
  variant,
  value,
  onChange,
  placeholder,
  errorMessage,
}: InputFieldProps) => {
  // Base styles for label and input
  const labelBaseStyle = "font-serif text-2xl";
  const inputBaseStyle = "border p-14 w-full";

  // Variant styles for the label based on the provided variant prop
  const labelVariantStyles = {
    primary: "block mb-10 text-start",
    secondary: "text-xs md:text-xl w-80",
  };

  // Variant styles for the input based on the provided variant prop
  const inputVariantStyles = {
    primary: "border-gray-300 rounded-md px-10 py-8 w-full mb-10",
    secondary:
      "text-xs md:text-base border-buttonPrimary w-180 p-8 outline-none h-30 md:h-35 cursor-pointer md:w-220 hover:border-hoverPrimary",
  };

  // Combine base and variant styles for label and input
  const labelStyles = `${labelBaseStyle} ${labelVariantStyles[variant]}`;
  const inputStyles = `${inputBaseStyle} ${inputVariantStyles[variant]}`;

  return (
    <>
      <label className={labelStyles}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        className={inputStyles}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {errorMessage && <p className="text-red-500 ">{errorMessage}</p>}
    </>
  );
};

export default InputField;
