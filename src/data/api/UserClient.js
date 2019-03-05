import ApiService from '../../services/api/ApiService';

class UserClient {

  findUser(userId) {
    ApiService.setHeader().get(`users/${userId}`);
  };

};

export default new UserClient();