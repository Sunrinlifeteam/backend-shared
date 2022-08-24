export interface IGetRefreshTokenIsValid {
  refreshToken: string;
  userId: string;
}

export interface IGetRefreshTokenAndIsNewUserByLogin {
  email: string;
  username: string;
  department: string;
  grade: number;
  class: number;
  accountType: number;
  role: number;
}

export interface IGetRefreshTokenAndIsNewUserByLoginResponse {
  refreshToken: string;
  isNewUser: boolean;
}

export interface IRefreshPayload {
  id: string;
}

export interface IAccessPayload {
  id: string;
}
