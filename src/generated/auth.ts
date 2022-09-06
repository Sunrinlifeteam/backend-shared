/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { User } from "./user";

export const protobufPackage = "auth";

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
  number: number;
  accountType: number;
  role: number;
}

export interface IGetRefreshTokenAndIsNewUserByLoginResponse {
  refreshToken: string;
  isNewUser: boolean;
}

export interface IAccessPayload {
  id: string;
}

export interface IGetAccessToken {
  userId: string;
}

export interface IGetAccessTokenResponse {
  accessToken: string;
}

export interface ICreateAccessTokenByUserId {
  id: string;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthServiceClient {
  createAccessTokenByUserId(request: ICreateAccessTokenByUserId): Observable<string | undefined>;

  accessValidate(request: IAccessPayload): Observable<User>;

  getAccessToken(request: IGetAccessToken): Observable<IGetAccessTokenResponse>;

  getRefreshTokenIsValid(request: IGetRefreshTokenIsValid): Observable<boolean | undefined>;

  getRefreshTokenAndIsNewUserByLogin(
    request: IGetRefreshTokenAndIsNewUserByLogin,
  ): Observable<IGetRefreshTokenAndIsNewUserByLoginResponse>;
}

export interface AuthServiceController {
  createAccessTokenByUserId(
    request: ICreateAccessTokenByUserId,
  ): Promise<string | undefined> | Observable<string | undefined> | string | undefined;

  accessValidate(request: IAccessPayload): Promise<User> | Observable<User> | User;

  getAccessToken(
    request: IGetAccessToken,
  ): Promise<IGetAccessTokenResponse> | Observable<IGetAccessTokenResponse> | IGetAccessTokenResponse;

  getRefreshTokenIsValid(
    request: IGetRefreshTokenIsValid,
  ): Promise<boolean | undefined> | Observable<boolean | undefined> | boolean | undefined;

  getRefreshTokenAndIsNewUserByLogin(
    request: IGetRefreshTokenAndIsNewUserByLogin,
  ):
    | Promise<IGetRefreshTokenAndIsNewUserByLoginResponse>
    | Observable<IGetRefreshTokenAndIsNewUserByLoginResponse>
    | IGetRefreshTokenAndIsNewUserByLoginResponse;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createAccessTokenByUserId",
      "accessValidate",
      "getAccessToken",
      "getRefreshTokenIsValid",
      "getRefreshTokenAndIsNewUserByLogin",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_SERVICE_NAME = "AuthService";
