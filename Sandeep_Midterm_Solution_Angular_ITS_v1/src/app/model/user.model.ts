export class User {
    id?: number;
    title?: string;
    description?: string;
    priority?: string;
    status?: string;
    assignee?: string;
    date?: Date;
  }

  export interface User {
    id?: number; 
    name?: string;
    loginId: string;
    password: string;
  }
  