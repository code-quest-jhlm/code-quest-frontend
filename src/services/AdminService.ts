import { AxiosRequestConfig } from 'axios';
import { makeRequest } from '@/api';

const AdminService = {
  adminLogin: <TResponse, TRequest = any>(data: TRequest) => makeRequest<TResponse, TRequest>('POST', '/auth/login', data),
  adminProfile: <TResponse>(config?: AxiosRequestConfig) => makeRequest<TResponse>('GET', '/auth/profile', undefined, config),
  adminDrawCreate: <TResponse>() => makeRequest<TResponse>('GET', '/v1/draw'),
};

export default AdminService;
