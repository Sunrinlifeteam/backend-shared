import { ApiProperty } from '@nestjs/swagger';

export class UpdateUser {
  @ApiProperty()
  id: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: false })
  image?: string;

  @ApiProperty({ required: false })
  backgroundImage?: string;

  @ApiProperty({ required: false })
  githubLink?: string;

  @ApiProperty({ required: false })
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
