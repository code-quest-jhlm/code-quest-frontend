import axios, { AxiosRequestConfig, Method } from 'axios';

const CodeQuestAPI = axios.create({
  baseURL: 'http://localhost:3000',
});

export async function makeRequest<TResponse, TRequest = any>(
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

  return CodeQuestAPI(requestConfig)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}
