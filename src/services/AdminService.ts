import { AxiosRequestConfig } from 'axios';
import { makeRequest } from '@/api';

const AdminService = {
  adminLogin: <TResponse, TRequest = any>(data: TRequest) => makeRequest<TResponse, TRequest>('POST', '/auth/login', data),
  discordLogin: <TResponse>(id: string) => makeRequest<TResponse>('GET', `/discord/login/${id}`),

  adminDrawCreate: <TResponse, TRequest>(data: TRequest, config?: AxiosRequestConfig,) => makeRequest<TResponse>('POST', '/draw', data, config),
  adminDrawFindAll: <TResponse>(config?: AxiosRequestConfig) => makeRequest<TResponse>('GET', '/draw', undefined, config),
  adminDrawRemove: <TResponse, TRequest>(id: string, data: TRequest, config?: AxiosRequestConfig) => makeRequest<TResponse>('PATCH', `/draw/${id}`, data, config),
  adminDrawFindOne: <TResponse>(id: string, config?: AxiosRequestConfig) => makeRequest<TResponse>('GET', `/draw/${id}`, undefined, config),
  adminDrawUpdateOne: <TResponse>(id: string, config?: AxiosRequestConfig) => makeRequest<TResponse>('PATCH', `/draw/${id}`, undefined, config),
  adminParticipantsDrawFindOne: <TResponse>(id: string, config?: AxiosRequestConfig) => makeRequest<TResponse>('GET', `/participants/draw/${id}`, undefined, config),
};

export default AdminService;
