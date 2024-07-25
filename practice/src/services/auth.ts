// Helper
import APIHelper, { ApiResponse } from "./helper";

// Type
import { UserProps } from "type/user";

// COnstant
import { API } from "constants/url";

class AuthenticationService {
  private apiHelper: APIHelper;

  constructor() {
    this.apiHelper = new APIHelper();
  }

  /**
   * Sign up a new user
   *
   * @param formData - The user data to be submitted for registration
   * @returns A promise that resolves to the API response containing the user data or an error message
   */
  async signUpUser(formData: UserProps): Promise<ApiResponse<UserProps>> {
    try {
      const formDataWithRole = {
        ...formData,
        role: "user",
        img: "",
      };

      const response = await this.apiHelper.request(
        `${API.BASE_URL}${API.API_USERS}`,
        "POST",
        formDataWithRole,
      );

      return response;
    } catch (error) {
      console.error("Failed to sign up user:", error);
      return {
        data: null,
        error: {
          message: (error as Error).message || "Failed to sign up user",
        },
      };
    }
  }

  /**
   * Sign in a user
   *
   * @param email - The email address of the user
   * @param password - The password of the user
   * @returns A promise that resolves to the API response containing the authenticated user data or an error message
   */
  async signInUser(
    email: string,
    password: string,
  ): Promise<ApiResponse<UserProps>> {
    try {
      const response = await this.apiHelper.request(
        `${API.BASE_URL}${API.API_USERS}?email=${email}&password=${password}`,
        "GET",
      );

      if (response.error) {
        throw new Error(
          response.error.message || "Failed to authenticate user",
        );
      }

      const users = response.data as UserProps[];

      const user = users.find(
        (user: UserProps) => user.email === email && user.password === password,
      );

      if (user && user.role) {
        return { data: user, error: null };
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      return {
        data: null,
        error: {
          message: (error as Error).message || "Failed to authenticate user",
        },
      };
    }
  }
}

export default AuthenticationService;
