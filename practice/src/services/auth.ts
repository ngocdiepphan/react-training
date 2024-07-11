import APIHelper, { ApiResponse } from './helper';
import { UserProps } from 'type/user';
import { API } from 'constants/url';

class UserService {
  private apiHelper: APIHelper;

  constructor() {
    this.apiHelper = new APIHelper();
  }

  async signUpUser(formData: UserProps): Promise<ApiResponse<UserProps>> {
    try {
      const formDataWithRole = {
        ...formData,
        role: 'user',
      };

      console.log('Signing up with:', formDataWithRole);

      const response = await this.apiHelper.request(`${API.BASE_URL}${API.API_USERS}`, 'POST', formDataWithRole);

      console.log('Sign up response:', response);
      return response;
    } catch (error) {
      console.error('Failed to sign up user:', error);
      return {
        data: null,
        error: { message: (error as Error).message || 'Failed to sign up user' },
      };
    }
  }
}

export default UserService;
