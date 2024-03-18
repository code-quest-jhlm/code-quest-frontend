export interface ProfileInfo {
  id: string;
  username: string;
  email: string;
  password: string;
  fullName: string;
  iat: number;
  exp: number;
}

export type ProfileInformation = ProfileInfo | null;

export interface CreateDrawPayload {
  title: string
  description: string
}
