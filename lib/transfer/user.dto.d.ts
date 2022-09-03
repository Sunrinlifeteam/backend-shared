export declare class UpdateUser {
    id: string;
    description?: string;
    image?: string;
    backgroundImage?: string;
    githubLink?: string;
    clubId?: number;
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
    role: number;
    description?: string;
    githubLink?: string;
    image?: string;
    backgroundImage?: string;
    clubId?: number;
    createdDate: Date;
    updatedDate: Date;
}
export interface CreateUser {
    email: string;
    username: string;
    department: string;
    grade: number;
    class: number;
    number: number;
    accountType: number;
    role: number;
    description?: string | undefined;
    githubLink?: string;
    image?: string;
    backgroundImage?: string;
    clubId?: number;
}
