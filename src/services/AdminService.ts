import { makeRequest } from '@/api';

const AdminService = {
  adminLogin: <TResponse, TRequest = any>(data: TRequest) => makeRequest<TResponse, TRequest>('POST', '/login', data),
  adminProfile: <TResponse>() => makeRequest<TResponse>('GET', '/profile'),
  adminDrawCreate: <TResponse>(data: any) => makeRequest<TResponse>('POST', '/v1/draw', data),
};

export default AdminService;
