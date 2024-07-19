import APIHelper, { ApiResponse } from "./helper";
import { API } from "../constants/url";
import { Recipe } from "type/recipe";
import { RecipeRow } from "type/table";

class RecipeService {
  private apiHelper: APIHelper;

  constructor() {
    this.apiHelper = new APIHelper();
  }

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
