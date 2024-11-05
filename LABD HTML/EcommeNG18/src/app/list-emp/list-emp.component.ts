import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-emp',
  // standalone: true,
  // imports: [],
  templateUrl: './list-emp.component.html',
  styleUrl: './list-emp.component.css'
})
export class ListEmpComponent implements OnInit {

  employees: Employee[];
  employeeService: EmployeeService;

  constructor(employeeService: EmployeeService, private router: Router){
    this.employeeService = employeeService;
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employeeData) => {
      this.employees = employeeData
    });
  }

}
