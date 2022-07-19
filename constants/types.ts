import { departments } from '.';

export type valueOf<T> = T[keyof T];

export enum ACCOUNT_TYPE {
  STUDENT = 0,
  TEACHER = 1,
}

export enum CLUB_TYPE {
  MAJOR = 0,
  MINOR = 1,
  AUTONOMY = 2,
}

export const ROLE_FLAG = {
  ADMIN: 1 << 0,
} as const;

export type UserDepartment = typeof departments[number];
