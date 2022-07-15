import { AxiosInstance, AxiosResponse } from 'axios'
import getInstance, { basePath } from '~/configs/instance'

const instance: AxiosInstance = getInstance()

export const exApi = async () => {
  const { data }: AxiosResponse = await instance.get(`${basePath}/slot/addSlot`)
  return data
}
