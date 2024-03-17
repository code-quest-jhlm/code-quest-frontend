export interface ProfileInfo {
  id: number;
  name: string;
  userId: string;
  email: string;
  role: string;
  deletedAt: null;
}

export type ProfileInformation = ProfileInfo | null;
