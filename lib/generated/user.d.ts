import { Observable } from "rxjs";
export declare const protobufPackage = "user";
export interface UpdateUser {
    id: string;
    description: string;
    image: string;
    backgroundImage: string;
    githubLink: string;
    clubId: number;
}
export interface CreateUser {
    email: string;
    username: string;
    department: string;
    grade: number;
    class: number;
    number: number;
    accountType: number;
    roleFlag: number;
    description?: string | undefined;
    githubLink?: string | undefined;
    image?: string | undefined;
    backgroundImage?: string | undefined;
    clubId?: number | undefined;
}
export interface User {
    id: string;
    email: string;
    username: string;
    department: string;
    grade: number;
    class: number;
    number: number;
    accountType: number;
    roleFlag: number;
    description: string;
    githubLink: string;
    image: string;
    backgroundImage: string;
    clubId: number;
    createdDate: string;
    updatedDate: string;
}
export declare const USER_PACKAGE_NAME = "user";
export interface UserServiceClient {
    getUserById(request: string | undefined): Observable<User>;
    getUserByEmail(request: string | undefined): Observable<User>;
    updateUser(request: UpdateUser): Observable<User>;
    createUser(request: CreateUser): Observable<User>;
}
export interface UserServiceController {
    getUserById(request: string | undefined): Promise<User> | Observable<User> | User;
    getUserByEmail(request: string | undefined): Promise<User> | Observable<User> | User;
    updateUser(request: UpdateUser): Promise<User> | Observable<User> | User;
    createUser(request: CreateUser): Promise<User> | Observable<User> | User;
}
export declare function UserServiceControllerMethods(): (constructor: Function) => void;
export declare const USER_SERVICE_NAME = "UserService";
