import http from '../services/httpService';
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/files";

 // axios.post("api/uploadfile", formData); 
  
 // upload a file to server
export function upload(formData) {
  return http.post(apiEndpoint, formData);
}

