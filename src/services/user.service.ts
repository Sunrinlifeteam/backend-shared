import { StringValue } from 'google/protobuf/wrappers';
import { Observable } from 'rxjs';
import { CreateUser, UpdateUser, User } from '../transfer/user.dto';

export interface UserService {
  getUserById(id: StringValue): Observable<User>;
  getUserByEmail(email: StringValue): Observable<User>;
  setUserRefreshToken(
    id: StringValue,
    refreshToken: StringValue,
  ): Observable<User>;
  createUser(user: CreateUser): Observable<User>;
  updateUser(user: UpdateUser): Observable<User>;
}
