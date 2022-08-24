import { BoolValue } from 'google.protobuf';
import { Observable } from 'rxjs';
import {
  IAccessPayload,
  IGetRefreshTokenAndIsNewUserByLogin,
  IGetRefreshTokenAndIsNewUserByLoginResponse,
  IGetRefreshTokenIsValid,
} from '../transfer/auth.dto';
import { User } from '../transfer/user.dto';

export interface AuthService {
  getRefreshTokenIsValid(
    payload: IGetRefreshTokenIsValid,
  ): Observable<BoolValue>;
  getRefreshTokenAndIsNewUserByLogin(
    payload: IGetRefreshTokenAndIsNewUserByLogin,
  ): Observable<IGetRefreshTokenAndIsNewUserByLoginResponse>;
  accessValidate(payload: IAccessPayload): Observable<User>;
}
