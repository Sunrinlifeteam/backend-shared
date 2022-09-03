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
