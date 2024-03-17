import { makeRequest } from '@/api';

const AdminService = {
  adminLogin: <TResponse, TRequest = any>(data: TRequest) => makeRequest<TResponse, TRequest>('POST', '/login', data),
  adminProfile: <TResponse>() => makeRequest<TResponse>('GET', '/profile'),
  adminDrawCreate: <TResponse>() => makeRequest<TResponse>('GET', '/v1/draw'),
};

export default AdminService;
