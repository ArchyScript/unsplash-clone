import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios' 

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
const baseURL = import.meta.env.VITE_API_BASE_URL

console.log('Access Key:', accessKey) // Debugging
console.log('Base URL:', baseURL) // Debugging

// Create an instance of axios with default config
const apiClient: AxiosInstance = axios.create({
  baseURL, // Unsplash API base URL
  headers: {
    'Content-Type': 'application/json'
  }
})

// Generic API call function
export const getRequest = async (
  path: string,
  query: string = 'African',
  page: number = 1
): Promise<AxiosResponse<any>> => {
  const url = `${path}?page=${page}&query=${query}&client_id=${accessKey}`
  return await apiClient.get<any>(url)
}

// Function to fetch all posts
export const getPosts = async (): Promise<AxiosResponse<any>> => {
  return await getRequest('/search/photos')
}
// Func
