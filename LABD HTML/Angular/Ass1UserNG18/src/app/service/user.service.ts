// 1. Connect to an external API to get the list of users
import { HttpClient } from "@angular/common/http";
// 2. Create a service to get the list of users
import { Injectable } from "@angular/core";
// 3. Use an observable to get the list of users
import { Observable } from "rxjs";
// 4. Use the User model to define the structure of the user object
import { User } from "../model/user.model";

@Injectable({
    providedIn: "root"
})

export class UserService {
    baseUrl: string = "http://localhost:3000/users"; 

    constructor(private httpClient: HttpClient) {}

    // Get the list of users
    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.baseUrl);
    }

    // Get a user by id
    getUserById(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.baseUrl}/${id}`);
    }

    // Create a new user
    createUser(user: User): Observable<User> {
        return this.httpClient.post<User>(this.baseUrl, user);
    }

    // Update an existing user
    updateUser(id: number, user: Partial<User>): Observable<User> {
        return this.httpClient.put<User>(`${this.baseUrl}/${id}`, user);
    }

    // Delete a user
    deleteUser(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }
}
