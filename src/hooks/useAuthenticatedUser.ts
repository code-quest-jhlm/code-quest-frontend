import { jwtDecode } from 'jwt-decode';

interface JwtTokenPayload {
  email: string;
  role: string;
  exp: number;
  iat: number;
}

const useAuthenticatedUser = () => {
  const token = sessionStorage.getItem('token') || '';
  let user: JwtTokenPayload | null = null;
  try {
    user = jwtDecode<JwtTokenPayload>(token);
  } catch (error) {
    user = null;
  }
  return {
    user,
  };
};

export default useAuthenticatedUser;
