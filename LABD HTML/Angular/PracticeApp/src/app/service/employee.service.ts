import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../model/employee.model";
@Injectable({
    providedIn: 'root'
})
export class EmployeeService{
    baseUrl: string = 'http://localhost:3000/employees'
    constructor(private http: HttpClient) {}

    getEmployees() {
        return this.http.get<Employee[]>(this.baseUrl);
    }

    addEmployee(employee: Employee) {
        return this.http.post<Employee>(this.baseUrl, employee);
    }

    updateEmployee(employee: Employee) {
        return this.http.put<Employee>(`${this.baseUrl}/${employee.id}`, employee);
    }

    deleteEmployee(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}