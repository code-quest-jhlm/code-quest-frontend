export interface JwtTokenPayload {
  email: string;
  role: string;
  exp: number;
  iat: number;
}

export interface ProfileInfo {
  id: number;
  name: string;
  userId: string;
  email: string;
  role: string;
  deletedAt: null;
}

export type ProfileInformation = ProfileInfo | null;
