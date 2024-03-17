import { AxiosRequestConfig, Method } from 'axios';
import codeQuestAPI from '@/api';

async function makeRequest<TResponse, TRequest = any>(
  method: Method,
  url: string,
  data?: TRequest,
  config?: AxiosRequestConfig
): Promise<TResponse> {
  const requestConfig: AxiosRequestConfig = {
    ...config,
    method,
    url,
    data,
  };

  return codeQuestAPI(requestConfig)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

const AdminService = {
  adminLogin: <TResponse, TRequest = any>(data: TRequest) => makeRequest<TResponse, TRequest>('POST', '/login', data),
  adminProfile: <TResponse>() => makeRequest<TResponse>('GET', '/profile'),
};

export default AdminService;
