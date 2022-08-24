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

export interface IGetAccessToken {
  userId: string;
}

export interface IGetRefreshTokenAndIsNewUserByLoginResponse {
  refreshToken: string;
  isNewUser: boolean;
}

export interface IGetAccessTokenResponse {
  accessToken: string;
}

export interface ICreateAccessTokenByUserId {
  id: string;
}

export interface IRefreshPayload {
  id: string;
}

export interface IAccessPayload {
  id: string;
}

export interface IUpdateUserRefreshToken {
  userId: string;
  refreshToken: string;
}
