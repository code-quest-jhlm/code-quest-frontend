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
  awards: string
  totalWinners: string,
  state: boolean
}

export interface DrawItemValue {
  id: string;
  title: string;
  description: string;
  state: boolean;
  totalWinners: number;
  awards: string[];
  drawDate: string;
  participants: any[];
}
