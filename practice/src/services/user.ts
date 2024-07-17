import APIHelper, { ApiResponse } from "./helper";
import { UserProps } from "../type/user";
import { API } from "../constants/url";

class UserService {
  private apiHelper: APIHelper;

  constructor() {
    this.apiHelper = new APIHelper();
  }

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
  
  updateUser = async (updatedUser: UserProps): Promise<ApiResponse<UserProps>> => {
    try {
      const res = await fetch(`${API.BASE_URL}${API.API_USERS}/${updatedUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
      return await this.apiHelper.handleResponse<UserProps>(res);
    } catch (error) {
      return {
        data: null,
        error: { message: (error as Error).message },
      };
    }
}
}

export default UserService;
