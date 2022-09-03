import { departments } from '.';
export declare type valueOf<T> = T[keyof T];
export declare enum ACCOUNT_TYPE {
    STUDENT = 0,
    TEACHER = 1
}
export declare enum CLUB_TYPE {
    MAJOR = 0,
    MINOR = 1,
    AUTONOMY = 2
}
export declare const ROLE_FLAG: {
    readonly ADMIN: number;
};
export declare type UserDepartment = typeof departments[number];
