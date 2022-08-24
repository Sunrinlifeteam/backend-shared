import { StringValue } from 'google.protobuf';
import { Observable } from 'rxjs';
import { CreateUser, User } from '../transfer/user.dto';

export interface UserService {
  getUserById(id: StringValue): Observable<User>;
  getUserByEmail(email: StringValue): Observable<User>;
  setUserRefreshToken(
    id: StringValue,
    refreshToken: StringValue,
  ): Observable<User>;
  createUser(user: CreateUser): Promise<User>;
}
