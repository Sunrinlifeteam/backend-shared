import { Observable } from "rxjs";
import { User } from "./user";
export declare const protobufPackage = "auth";
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
export declare const AUTH_PACKAGE_NAME = "auth";
export interface AuthServiceClient {
    createAccessTokenByUserId(request: ICreateAccessTokenByUserId): Observable<string | undefined>;
    accessValidate(request: IAccessPayload): Observable<User>;
    getAccessToken(request: IGetAccessToken): Observable<IGetAccessTokenResponse>;
    getRefreshTokenIsValid(request: IGetRefreshTokenIsValid): Observable<boolean | undefined>;
    getRefreshTokenAndIsNewUserByLogin(request: IGetRefreshTokenAndIsNewUserByLogin): Observable<IGetRefreshTokenAndIsNewUserByLoginResponse>;
}
export interface AuthServiceController {
    createAccessTokenByUserId(request: ICreateAccessTokenByUserId): Promise<string | undefined> | Observable<string | undefined> | string | undefined;
    accessValidate(request: IAccessPayload): Promise<User> | Observable<User> | User;
    getAccessToken(request: IGetAccessToken): Promise<IGetAccessTokenResponse> | Observable<IGetAccessTokenResponse> | IGetAccessTokenResponse;
    getRefreshTokenIsValid(request: IGetRefreshTokenIsValid): Promise<boolean | undefined> | Observable<boolean | undefined> | boolean | undefined;
    getRefreshTokenAndIsNewUserByLogin(request: IGetRefreshTokenAndIsNewUserByLogin): Promise<IGetRefreshTokenAndIsNewUserByLoginResponse> | Observable<IGetRefreshTokenAndIsNewUserByLoginResponse> | IGetRefreshTokenAndIsNewUserByLoginResponse;
}
export declare function AuthServiceControllerMethods(): (constructor: Function) => void;
export declare const AUTH_SERVICE_NAME = "AuthService";
