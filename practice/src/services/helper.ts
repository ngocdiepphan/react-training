// Types
import { Recipe } from "type/recipe";
import { UserProps } from "type/user";

export interface ApiResponse<T> {
  data: T | Recipe[] | UserProps[] | null;
  error: { message: string } | null;
}

class APIHelper {

   /**
   * Handle the response from a fetch request
   *
   * @param res - The response object from the fetch request
   * @returns A promise that resolves to an API response containing the data or an error message
   */
  async handleResponse<T>(res: Response): Promise<ApiResponse<T>> {
    try {
      if (res.ok) {
        const data: T | Recipe[] | UserProps[] = await res.json();
        return {
          data,
          error: null,
        };
      } else {
        return {
          data: null,
          error: { message: "Error!" },
        };
      }
    } catch (err) {
      return {
        data: null,
        error: { message: (err as Error).message },
      };
    }
  }

  /**
   * Handle errors and return API responses
   *
   * @param err - Error object
   * @returns An API response containing the error message
   */
  async handleError<T>(err: Error): Promise<ApiResponse<T>> {
    return {
      data: null,
      error: { message: err.message },
    };
  }

  /**
   * Make an API request
   *
   * @param url - The API URL
   * @param method - HTTP method (GET, POST, PUT, DELETE)
   * @param data - Data to send (if any)
   * @param contentType - Content type (default is application/json)
   * @returns A promise that resolves to an API response
   */
  async request(
    url: string,
    method: string,
    data: object | null = null,
    contentType: string = "application/json",
  ): Promise<ApiResponse<any>> {
    try {
      let content: RequestInit = {
        method,
        headers: {
          "Content-Type": contentType,
        },
      };

      if (data) {
        content.body = JSON.stringify(data);
      }

      const response = await fetch(url, content);

      return await this.handleResponse(response);
    } catch (error) {
      return await this.handleError(error as Error);
    }
  }
}

export default APIHelper;
