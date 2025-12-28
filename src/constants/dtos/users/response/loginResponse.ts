export interface LoginResponse {
  email: string;
  userName?: string;
  role: string;
  fullName?: string;
  phoneNumber?: string;
  address?: string;
  referralCode: string;
  referredByUserId?: string;
  accessToken: string;
}
