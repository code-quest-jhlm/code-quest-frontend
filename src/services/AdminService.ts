import { AxiosRequestConfig } from 'axios';
import { makeRequest } from '@/api';

const AdminService = {
  adminLogin: <TResponse, TRequest = any>(data: TRequest) => makeRequest<TResponse, TRequest>('POST', '/auth/login', data),
  adminProfile: <TResponse>(config?: AxiosRequestConfig) => makeRequest<TResponse>('GET', '/auth/profile', undefined, config),

  adminDrawCreate: <TResponse, TRequest>(data: TRequest, config?: AxiosRequestConfig,) => makeRequest<TResponse>('POST', '/v1/draw', data, config),
  adminDrawFindAll: <TResponse>(config?: AxiosRequestConfig) => makeRequest<TResponse>('POST', '/v1/draw', undefined, config),
};

export default AdminService;
