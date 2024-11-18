import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('TOKEN');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        const { setUserToken } = useStateContext();
        setUserToken(null);
      }
      return Promise.reject(error);
    }
);

export default axiosClient;