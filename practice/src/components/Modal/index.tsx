import React, { useState } from "react";

// Components
import {
  InputField,
  OptionCategory,
  Rating,
  Button
} from "components";

// Types
import { Recipe } from "type/recipe";
import { FORM_MODAL } from "constants/index";

// Service
import RecipeService from "services/recipe";

// Helper
import { formatDate } from "helpers";

interface ModalProps {
  onAddRecipe: (newRecipe: Recipe) => void;
}

const Modal = ({ onAddRecipe }: ModalProps) => {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState<Recipe>({
    name: "",
    description: "",
    ingredient: [],
    instruction: [],
    nutrition: [],
    creator: "",
    collection_id: 0,
    category: "",
    ratings: 0,
    createdAt: formatDate(new Date()),
    id: "",
    prepTime: {
      min: "",
      max: "",
    },
    serving: "",
    img: "",
    imgCreator: "",
    comments: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      createdAt: formatDate(date),
    }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      category: category,
    }));
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const rating = parseInt(e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      ratings: rating,
    }));
  };

  const handleSaveFormAdd = async () => {
    const recipeService = new RecipeService();
    const response = await recipeService.addRecipe(formData);
    if (response.error) {
      return;
    } else {
      const newRecipe = response.data as Recipe;
      alert("Add recipe successful!");
      onAddRecipe(newRecipe);
      setShowForm(false);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      {showForm && (
        <form
          className="show-form text-xs w-300 md:w-450 h-auto md:text-sm font-serif w-370 absolute bg-modalPrimary top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          id="form-add-recipes"
        >
          <div className="flex items-center justify-between px-10 py-20 transition-all">
            <p className="text-xl font-semibold text-gray-800">Add recipes</p>
            <span
              className="bg-close w-30 h-30 bg-no-repeat cursor-pointer"
              onClick={handleCloseForm}
            ></span>
          </div>


            <div className="p-30">
            {FORM_MODAL.map((field, index) => (
              <div
                className=""
                key={index}
              >
                {field.type === "date" ? (
                  <div className="flex flex-row items-center mb-20 md:justify-around">
                    <InputField
                    id={field.id}
                    label={field.label}
                    type={field.type}
                    name={field.name}
                    value={formData.createdAt as string}
                    onChange={handleDateChange}
                    variant="secondary"
                    errorMessage=""
                  />
                    </div>
                ) : (
                  <div className="flex flex-row items-center mb-20 md:justify-around">
                  <InputField
                    label={field.label}
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    variant="secondary"
                    value={
                      formData[field.name as keyof Recipe]?.toString() || ""
                    }
                    onChange={handleInputChange}
                    errorMessage=""
                  />
                  </div>
                )}
              </div>
            ))}


            <OptionCategory onChange={handleCategoryChange} />
            <Rating onChange={handleRatingChange} />
            <div className="flex justify-center">
              <Button
                type="button"
                variant="confirm"
                onClick={handleSaveFormAdd}
              >
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
