import React, { useState } from "react";
import InputField from "../Inputs/TextField";
import OptionCategory from "../Options/Category";
import OptionRating from "../Options/Rating";
import Button from "../Buttons";

const Modal: React.FC = () => {
  const [showForm, setShowForm] = useState(true);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSaveForm = () => {
    setShowForm(false);
  };

  const formFields = [
    { label: "Image", type: "text", id: "image", name: "Image", variant: "secondary" },
    { label: "Name", type: "text", id: "name", name: "Name", variant: "secondary" },
    { label: "Creator", type: "text", id: "creator", name: "Creator", variant: "secondary" },
    { label: "Description", type: "text", id: "description", name: "Description", variant: "secondary" }
  ];

  return (
    <>
      {showForm && (
        <form
          className="show-form text-xs w-300 md:w-450 h-auto md:text-sm font-serif w-370 absolute bg-modalPrimary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          id="form-add-recipes"
        >
          <div className="flex items-center justify-between px-10 py-20 transition-all ">
            <p className="text-xl font-semibold text-gray-800">Add recipes</p>
            <span
              className="bg-close w-30 h-30 bg-no-repeat cursor-pointer"
              onClick={handleCloseForm}
            ></span>
          </div>
          <div className="flex flex-col p-30 pt-0 justify-between md:justify-around">
            {formFields.map((field, index) => (
              <div className="flex flex-row items-center md:justify-around mb-20" key={index}>
                <InputField
                  label={field.label}
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  variant={field.variant}
                />
              </div>
            ))}
            <OptionCategory />
            <OptionRating />
            <div className="flex justify-center">
              <Button type="button" variant="confirm" onClick={handleSaveForm}>
                Save
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Modal;
