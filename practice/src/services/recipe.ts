import APIHelper, { ApiResponse } from "./helper";
import { API } from "../constants/url";
import { Recipe } from "type/recipe";

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
}

export default RecipeService;
