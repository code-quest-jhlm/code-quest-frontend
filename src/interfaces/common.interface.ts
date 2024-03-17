export interface JwtTokenPayload {
  email: string;
  role: string;
  exp: number;
  iat: number;
}

export type SessionInformation = JwtTokenPayload | null;
