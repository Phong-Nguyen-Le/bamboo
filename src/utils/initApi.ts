import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Keys from '../constants/Keys'

const initApi = (url: string, headers = {}) => {
  const api = axios.create({
    baseURL: url,
    timeout: 100000,
    headers: {
      'Content-Type': 'application/json',
      accept: '*/*',
      ...headers
    }
  })

  api.interceptors.request.use(async (config) => {
    try {
      const token = await AsyncStorage.getItem(Keys.BAMBOO_SHIP_TOKEN)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    } catch (error) {
      return Promise.reject(error)
    }
    return config
  })

  api.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response && error.response.status === 401) {
      }
      return Promise.reject(error)
    }
  );
  return api
}

export default initApi
