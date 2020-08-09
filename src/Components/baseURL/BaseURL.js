import axios from "axios";

var axiosInstance = axios.create({
  baseURL: "http://localhost/restaurant/src/php",
});
export default axiosInstance;
