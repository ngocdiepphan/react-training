import React from "react";
import InputField from "../Inputs/TextField";
import OptionCategory from "../Options/Category";
import OptionRating from "../Options/Rating";
import Button from "../Buttons";

const FormAdd: React.FC = () => {
  return (
    <>
      <form
        className="show-form text-xs w-300 md:w-450 h-auto md:text-sm font-serif w-370 absolute bg-modalPrimary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        id="form-add-recipes"
      >
        <div className="flex items-center justify-between px-10 py-20 transition-all ">
          <p className="text-xl font-semibold text-gray-800">Add recipes</p>
          <span className="bg-close w-30 h-30 bg-no-repeat"></span>
        </div>
        <div className="flex flex-col p-30 pt-0 justify-between md:justify-around">
          <div className="flex flex-row items-center md:justify-around mb-20">
            <InputField
              label="Image"
              type="text"
              id="image"
              name="Image"
              variant="secondary"
            />
          </div>
          <div className="flex flex-row md:justify-around items-center mb-20">
            <InputField
              label="Name"
              type="text"
              id="name"
              name="Name"
              variant="secondary"
            />
          </div>
          <OptionCategory />
          <div className="flex flex-row md:justify-around items-center mb-20">
            <InputField
              label="Creator"
              type="text"
              id="creator"
              name="Creator"
              variant="secondary"
            />
          </div>
          <OptionRating />
          <div className="flex flex-row md:justify-around items-center mb-20">
            <InputField
              label="Description"
              type="text"
              id="description"
              name="Description"
              variant="secondary"
            />
          </div>
          <div className="flex justify-center">
            <Button type="button" variant="confirm">
              Save
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormAdd;
