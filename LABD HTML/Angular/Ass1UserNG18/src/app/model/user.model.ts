export class User {
    id?: number;
    name?: string;
    phoneNumber?: string;
    degree?: string;
    gender?: string;
    salary?: number;
    age?: number;
}

export interface User {
    id?: number;
    name?: string;
    phoneNumber?: string;
    email: string;  // <-- Add the email property
    // other properties
  }
  
