import { BoolValue, StringValue } from 'google/protobuf/wrappers';
import { Observable } from 'rxjs';
import {
  IAccessPayload,
  ICreateAccessTokenByUserId,
  IGetAccessToken,
  IGetAccessTokenResponse,
  IGetRefreshTokenAndIsNewUserByLogin,
  IGetRefreshTokenAndIsNewUserByLoginResponse,
  IGetRefreshTokenIsValid,
} from '../transfer/auth.dto';
import { User } from '../transfer/user.dto';

export interface AuthService {
  accessValidate(payload: IAccessPayload): Observable<User>;
  createAccessTokenByUserId(
    payload: ICreateAccessTokenByUserId,
  ): Observable<StringValue>;
  getAccessToken(payload: IGetAccessToken): Observable<IGetAccessTokenResponse>;
  getRefreshTokenIsValid(
    payload: IGetRefreshTokenIsValid,
  ): Observable<BoolValue>;
  getRefreshTokenAndIsNewUserByLogin(
    payload: IGetRefreshTokenAndIsNewUserByLogin,
  ): Observable<IGetRefreshTokenAndIsNewUserByLoginResponse>;
}
