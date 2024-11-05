// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Employee } from './model/employee.model';
// import { EmployeeService } from './service/employee.service';
// import { CommonModule } from '@angular/common';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   // imports: [RouterOutlet],
//   imports: [CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit {
//   title = 'PracticeApp';
//   employees? : Employee[];
//   newEmployee: Employee = new Employee();

//   constructor(private employeeService : EmployeeService){
//   }
//   ngOnInit(): void{
//     console.log("asynchronously retrieving data from the server");
//     this.employeeService.getEmployees().subscribe(data => this.employees=data);
//   }


//   createEmployee(): void {
//     this.employeeService.addEmployee(this.newEmployee).subscribe(employee => {
//       this.employees?.push(employee);
//       this.newEmployee = new Employee(); // Reset form
//     });
//   }

//   updateEmployee(employee: Employee): void {
//     this.employeeService.updateEmployee(employee).subscribe(updatedEmployee => {
//       const index = this.employees?.findIndex(e => e.id === updatedEmployee.id);
//       if (index !== undefined && index !== -1) {
//         this.employees![index] = updatedEmployee;
//       }
//     });
//   }

//   deleteEmployee(id: number): void {
//     this.employeeService.deleteEmployee(id).subscribe(() => {
//       this.employees = this.employees?.filter(employee => employee.id !== id);
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee.model';
import { EmployeeService } from './service/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PracticeApp';
  employees?: Employee[];
  newEmployee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  createEmployee(): void {
    this.employeeService.addEmployee(this.newEmployee).subscribe(employee => {
      this.employees?.push(employee);
      this.newEmployee = new Employee(); // Reset form
    });
  }

  updateEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(updatedEmployee => {
      const index = this.employees?.findIndex(e => e.id === updatedEmployee.id);
      if (index !== undefined && index !== -1) {
        this.employees![index] = updatedEmployee;
      }
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees?.filter(employee => employee.id !== id);
    });
  }
}



