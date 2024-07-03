import React from "react";

export interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
  variant: "primary" | "secondary";
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  name,
  variant,
}) => {
  const labelBaseStyle = "font-serif";
  const inputBaseStyle = "border p-14 w-full";

  const labelVariantStyles = {
    primary: "block mb-10 text-start",
    secondary: "text-md w-80",
  };

  const inputVariantStyles = {
    primary: "border-gray-300 rounded-md px-10 py-8 w-full mb-16",
    secondary: "border-buttonPrimary w-180 p-8 outline-none h-27 cursor-pointer md:w-220 hover:border-hoverPrimary"
  };

  const labelStyles = `${labelBaseStyle} ${labelVariantStyles[variant]}`;
  const inputStyles = `${inputBaseStyle} ${inputVariantStyles[variant]}`;

  return (
    <>
    <label htmlFor={id} className={labelStyles}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={inputStyles}
      />
    </>
  );
};

export default InputField;
