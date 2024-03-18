import { AxiosRequestConfig } from 'axios';
import { makeRequest } from '@/api';

const AdminService = {
  adminLogin: <TResponse, TRequest = any>(data: TRequest) => makeRequest<TResponse, TRequest>('POST', '/auth/login', data),
  adminProfile: <TResponse>(config?: AxiosRequestConfig) => makeRequest<TResponse>('GET', '/profile', undefined, config),

  adminDrawCreate: <TResponse, TRequest>(data: TRequest, config?: AxiosRequestConfig,) => makeRequest<TResponse>('POST', '/draw', data, config),
  adminDrawFindAll: <TResponse>(config?: AxiosRequestConfig) => makeRequest<TResponse>('GET', '/draw', undefined, config),
  adminDrawRemove: <TResponse, TRequest>(id: string, data: TRequest, config?: AxiosRequestConfig) => makeRequest<TResponse>('PATCH', `/draw/${id}`, data, config),
};

export default AdminService;
