import axios from 'axios'
import store from '../store'

const getToken = (): string | null => {
  const state = store.getState()
  return state.auth.accessToken
}

const ApiAxiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}`
})

interface RequestProps {
  method: 'GET' | 'POST' | 'DELETE'
  url: string
  headers?: any
  params?: any
  data?: any
}

const ApiClient = async ({
  method, url, headers, params, data
}: RequestProps): Promise<any> => await ApiAxiosClient({
  method,
  url,
  params,
  data,
  headers
}).then((res) => res.data)

export {
  ApiClient,
  getToken
}
