/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "user";

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

export const USER_PACKAGE_NAME = "user";

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

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getUserById", "getUserByEmail", "updateUser", "createUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
