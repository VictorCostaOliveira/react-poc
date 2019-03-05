import axios from 'axios';

class ApiService {
  constructor() {
    axios.defaults.baseURL = "localhost:3001/api/v1/";
  };

  get(resourcePath) {
    return new Promise((resolve, reject) => {
      axios
        .get(resourcePath).then((response) => {
          // this.reloadHeader(response);
          return resolve(response);
        })
        .catch((error) => {
          // this.handleError(error);
          return reject(error);
        });
    });
  };

  post(resourcePath, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${resourcePath}`, params).then((response) => {
          // this.reloadHeader(response);
          return resolve(response);
        })
        .catch((error) => {
          // this.handleError(error);
          return reject(error);
        });
    });
  };

  put(resourcePath, params) {
    return new Promise((resolve, reject) => {
      axios
        .put(resourcePath, params).then((response) => {
          // this.reloadHeader(response);
          return resolve(response);
        })
        .catch((error) => {
          // this.handleError(error);
          return reject(error);
        });
    });
  };

  delete(resourcePath, params) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${resourcePath}`, { data: params }).then((response) => {
          // this.reloadHeader(response);
          return resolve(response);
        })
        .catch((error) => {
          // this.handleError(error);
          return reject(error);
        });
    });
  };

  query(resourcePath, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${resourcePath}`, { params }).then((response) => {
          // this.reloadHeader(response);
          return resolve(response);
        })
        .catch((error) => {
          // this.handleError(error);
          return reject(error);
        });
    });
  };

  setHeader() {
    axios.defaults.headers.common['Authorization'] = "A3IEDSFI4O3IFRJFW4IRNSDFN";
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    return this;
  };
};

export default new ApiService();