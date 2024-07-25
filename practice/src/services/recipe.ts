// Helper
import APIHelper, { ApiResponse } from "./helper";

// Constant
import { API } from "constants/url";

// Types
import { Recipe } from "type/recipe";
import { RecipeRow } from "type/table";

class RecipeService {
  private apiHelper: APIHelper;

  constructor() {
    this.apiHelper = new APIHelper();
  }

  /**
   * Fetch all recipes from the API.
   *
   * @returns A promise that resolves to an API response containing a list of recipes or an error message.
   */
  fetchRecipes = async (): Promise<ApiResponse<Recipe[]>> => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.API_RECIPES}`);
      return await this.apiHelper.handleResponse<Recipe[]>(res);
    } catch (error) {
      return {
        data: null,
        error: { message: (error as Error).message },
      };
    }
  };

  /**
   * Get a specific recipe by its ID.
   *
   * @param recipeId - The ID of the recipe to fetch.
   * @returns A promise that resolves to an API response containing the recipe data or an error message.
   */
  getById = async (recipeId: string): Promise<ApiResponse<Recipe>> => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.API_RECIPES}/${recipeId}`);
      return await this.apiHelper.handleResponse<Recipe>(res);
    } catch (error) {
      return {
        data: null,
        error: { message: (error as Error).message },
      };
    }
  };

  /**
   * Update an existing recipe.
   *
   * @param updatedRecipe - The updated recipe data.
   * @returns A promise that resolves to an API response containing the updated recipe data or an error message.
   */
  updateRecipe = async (
    updatedRecipe: Recipe,
  ): Promise<ApiResponse<Recipe>> => {
    try {
      const res = await fetch(
        `${API.BASE_URL}${API.API_RECIPES}/${updatedRecipe.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRecipe),
        },
      );
      return await this.apiHelper.handleResponse<Recipe>(res);
    } catch (error) {
      return {
        data: null,
        error: { message: (error as Error).message },
      };
    }
  };

  /**
   * Delete a recipe by its ID.
   *
   * @param recipeId - The ID of the recipe to delete.
   * @returns A promise that resolves to an API response containing the deleted recipe data or an error message.
   */
  deleteRecipe = async (recipeId: string): Promise<ApiResponse<Recipe>> => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.API_RECIPES}/${recipeId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await this.apiHelper.handleResponse<Recipe>(res);
    } catch (error) {
      return {
        data: null,
        error: { message: (error as Error).message },
      };
    }
  };

  /**
   * Add a new recipe.
   *
   * @param newRecipe - The new recipe data.
   * @returns A promise that resolves to an API response containing the added recipe data or an error message.
   */
  addRecipe = async (
    newRecipe: Recipe | RecipeRow,
  ): Promise<ApiResponse<Recipe | RecipeRow>> => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.API_RECIPES}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });
      return await this.apiHelper.handleResponse<Recipe>(res);
    } catch (error) {
      return {
        data: null,
        error: { message: (error as Error).message },
      };
    }
  };
}

export default RecipeService;
