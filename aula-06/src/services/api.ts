import axios from "axios";

const api = axios.create({
  baseURL: "https://673bbe8096b8dcd5f3f74e9b.mockapi.io/api",
});

export default api;
