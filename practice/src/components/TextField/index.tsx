import React from "react";

export interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
  variant: "primary" | "secondary";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  name,
  variant,
  value,
  onChange,
  errorMessage,
}) => {
  const labelBaseStyle = "font-serif text-xl";
  const inputBaseStyle = "border p-14 w-full";

  const labelVariantStyles = {
    primary: "block mb-10 text-start",
    secondary: "text-xs md:text-xl w-80",
  };

  const inputVariantStyles = {
    primary: "border-gray-300 rounded-md px-10 py-8 w-full mb-10",
    secondary: "text-xs md:text-base border-buttonPrimary w-180 p-8 outline-none h-30 md:h-35 cursor-pointer md:w-220 hover:border-hoverPrimary"
  };

  const labelStyles = `${labelBaseStyle} ${labelVariantStyles[variant]}`;
  const inputStyles = `${inputBaseStyle} ${inputVariantStyles[variant]}`;

  return (
    <div className="">
      <label htmlFor={id} className={labelStyles}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        className={inputStyles}
        value={value}
        onChange={onChange}
      />
      {errorMessage && <p className="mb-10 text-red-500 ">{errorMessage}</p>}
    </div>
  );
};

export default InputField;
