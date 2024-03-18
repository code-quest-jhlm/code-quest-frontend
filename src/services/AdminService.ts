import { AxiosRequestConfig } from 'axios';
import { makeRequest } from '@/api';

const AdminService = {
  adminLogin: <TResponse, TRequest = any>(data: TRequest) => makeRequest<TResponse, TRequest>('POST', '/auth/login', data),
  adminProfile: <TResponse>(config?: AxiosRequestConfig) => makeRequest<TResponse>('GET', '/profile', undefined, config),

  adminDrawCreate: <TResponse, TRequest>(data: TRequest, config?: AxiosRequestConfig,) => makeRequest<TResponse>('POST', '/draw', data, config),
  adminDrawFindAll: <TResponse>(config?: AxiosRequestConfig) => makeRequest<TResponse>('GET', '/draw', undefined, config),
  adminDrawFindOne: <TResponse>(id: string, config?: AxiosRequestConfig) => makeRequest<TResponse>('GET', `/draw/${id}`, undefined, config),
  adminDrawUpdateOne: <TResponse>(id: string, config?: AxiosRequestConfig) => makeRequest<TResponse>('PATCH', `/draw/${id}`, undefined, config),
};

export default AdminService;
