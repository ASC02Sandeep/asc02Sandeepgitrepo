// 1. Connect to an external API to get the list of employees
import { HttpClient } from "@angular/common/http";
// 2. Create a service to get the list of employees
import { Injectable } from "@angular/core";
// 3 . Use an observable to get the list of employees
import { Observable } from "rxjs";
// 4. Use the Employee model to define the structure of the employee object
import { Employee } from "../model/employee.model";

@Injectable({
    providedIn: "root"
})

export class EmployeeService {
    baseUrl : string = "http://localhost:3000/employees";
    constructor(private httpClient: HttpClient) {
    }
    // get the list of employees
    getEmployees() {
        return this.httpClient.get<Employee[]>(this.baseUrl);
    }
    // get an employee by id
    getEmployeeById(id : number)  {
        return this.httpClient.get<Employee>(this.baseUrl + "/" + id);
    }
    // create an employee
    createEmployee(employee : Employee) {
        return this.httpClient.post(this.baseUrl, employee);
    }
    // update an employee
    updateEmployee(id:number, employee:any) {
        // return this.httpClient.put(this.baseUrl + "/" + id, employee);
        return this.httpClient.put(`${this.baseUrl}/${id}`, employee);
    }
    // delete an employee
    deleteEmployee(id:number) {
        return this.httpClient.delete(this.baseUrl + "/" + id);
    }
}