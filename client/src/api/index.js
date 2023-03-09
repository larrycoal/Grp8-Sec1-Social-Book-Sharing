import apisauce from 'apisauce'
import axios from 'axios'
const baseUrl = "http://localhost:3000"

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

const create = ({api})=>{
    const registerUser = (params={})=>api.post(`${baseUrl}/register`,params)
    const loginUser = (params = {}) => api.post(`${baseUrl}/login`, params);
    const findbooks = (params = {}) => api.get(`${baseUrl}/findBooks`, params);
    const addbook = (params = {}) => api.post(`${baseUrl}/addbook`, params);
    const getAllBooks = (params = {}) => api.get(`${baseUrl}/books`, params);


    return{
        registerUser,
        loginUser,
        findbooks,
        addbook,
        getAllBooks
    }
}

const api = create({api:boostrapApi()})
export default api;