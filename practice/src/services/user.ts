// Helper
import APIHelper, { ApiResponse } from "./helper";

// Type
import { UserProps } from "type/user";

// Constant
import { API } from "constants/url";

class UserService {
  private apiHelper: APIHelper;

  constructor() {
    this.apiHelper = new APIHelper();
  }

  /**
   * Fetch all users from the API.
   *
   * @returns A promise that resolves to an API response containing a list of users or an error message.
   */
  fetchUsers = async (): Promise<ApiResponse<UserProps[]>> => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.API_USERS}`);
      return await this.apiHelper.handleResponse<UserProps[]>(res);
    } catch (error) {
      return {
        data: null,
        error: { message: (error as Error).message },
      };
    }
  };

  /**
   * Update an existing user.
   *
   * @param updatedUser - The updated user data.
   * @returns A promise that resolves to an API response containing the updated user data or an error message.
   */
  updateUser = async (
    updatedUser: UserProps,
  ): Promise<ApiResponse<UserProps>> => {
    try {
      const res = await fetch(
        `${API.BASE_URL}${API.API_USERS}/${updatedUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        },
      );
      return await this.apiHelper.handleResponse<UserProps>(res);
    } catch (error) {
      return {
        data: null,
        error: { message: (error as Error).message },
      };
    }
  };

  /**
   * Delete a user by their ID.
   *
   * @param userId - The ID of the user to delete.
   * @returns A promise that resolves to an API response containing the deleted user data or an error message.
   */
  deleteUser = async (userId: string): Promise<ApiResponse<UserProps>> => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.API_USERS}/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await this.apiHelper.handleResponse<UserProps>(res);
    } catch (error) {
      return {
        data: null,
        error: { message: (error as Error).message },
      };
    }
  };
}

export default UserService;
