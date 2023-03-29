import apisauce from "apisauce";
import axios from "axios";
const baseUrl = "http://localhost:3000";

const boostrapApi = () => {
  const axiosInsance = axios.create({
    baseURL: "http://localhost:3000",
  });

  const api = apisauce.create({ axiosInsance });

  api.addAsyncRequestTransform((request, response) => async () => {
    const token = await localStorage.getItem("token");
    if (token) {
      request.headers.Authorization = `Bearer: ${token}`;
    }
  });

  return api;
};

const create = ({ api }) => {
  const registerUser = (params = {}) => api.post(`${baseUrl}/register`, params);
  const loginUser = (params = {}) => api.post(`${baseUrl}/login`, params);
  const findbooks = (params = {}) => api.get(`${baseUrl}/findBooks`, params);
  const addbook = (params = {}) => api.post(`${baseUrl}/addbook`, params);
  const getAllBooks = (params = {}) => api.get(`${baseUrl}/books`, params);
  const getBookOwner = (params = {}) => api.get(`${baseUrl}/userbook`, params);
  const makeRequest = (params = {}) =>
    api.post(`${baseUrl}/requestBook`, params);
  const getUserBooks = () => api.get(`${baseUrl}/book`);
  const getRequests = () => api.get(`${baseUrl}/requests`);
  const subscribe = () => api.post(`${baseUrl}/subscribe`);
  const fetchUser = () => api.get(`${baseUrl}/user`);

  return {
    registerUser,
    loginUser,
    findbooks,
    addbook,
    getAllBooks,
    getBookOwner,
    makeRequest,
    getUserBooks,
    getRequests,
    subscribe,
    fetchUser,
  };
};

const api = create({ api: boostrapApi() });
export default api;
