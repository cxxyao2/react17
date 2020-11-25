import http from '../services/httpService';
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
  // return http.post(apiEndpoint, {
  //   name: user.name,
  //   email: user.email,
  //   password: user.password
  // });

  return http.post(apiEndpoint, 
    {
      "name": user.username,
      "email": user.email,
      "password": user.password
    });
}

export function deleteUser(UserId) {
  return http.delete(apiEndpoint + '/' + UserId);
}

export function getUser(UserId) {
  return http.get(apiEndpoint + '/' + UserId);
}


export function saveUser(User) {
  return http.post(apiEndpoint, User);
}