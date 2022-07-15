import axios from 'axios'
import configs from '~/configs/server'

function getInstance() {
  // const token = readStorageItem('SDToken')
  const headers: any = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
  // if (token !== undefined && token !== null) {
  //   headers.Authorization = `Bearer ${token}`
  // }
  return axios.create({
    baseURL: configs.baseApiUrl,
    timeout: 120000,
    withCredentials: true,
    headers
  })
}

export default getInstance

export const basePath = '/api'
