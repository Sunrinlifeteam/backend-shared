import { User as UserValue } from '../value/user.vo';

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface User extends UserValue {}
  }
}
