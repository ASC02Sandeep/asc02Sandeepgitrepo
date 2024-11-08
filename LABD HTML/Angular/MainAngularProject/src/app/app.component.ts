// import { Component, OnInit } from '@angular/core';
// import { Employee } from './model/employee.model';
// import { EmployeeService } from './service/employee.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   title = 'PracticeApp';
//   employees?: Employee[];
//   newEmployee: Employee = new Employee();

//   constructor(private employeeService: EmployeeService) {}

//   ngOnInit(): void {
//     this.getEmployees();
//   }

//   getEmployees(): void {
//     this.employeeService.getEmployees().subscribe(data => this.employees = data);
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
  isEditing: boolean = false; // Track if we're in edit mode

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
  }

  createEmployee(): void {
    if (this.isEditing) {
      this.employeeService.updateEmployee(this.newEmployee).subscribe(updatedEmployee => {
        const index = this.employees?.findIndex(e => e.id === updatedEmployee.id);
        if (index !== undefined && index !== -1) {
          this.employees![index] = updatedEmployee;
        }
        this.isEditing = false; // Reset editing mode after update
        this.newEmployee = new Employee(); // Clear form
      });
    } else {
      this.employeeService.addEmployee(this.newEmployee).subscribe(employee => {
        this.employees?.push(employee);
        this.newEmployee = new Employee(); // Reset form after add
      });
    }
  }

  editEmployee(employee: Employee): void {
    this.newEmployee = { ...employee }; // Copy selected employee details into form
    this.isEditing = true; // Enter edit mode
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees?.filter(employee => employee.id !== id);
    });
  }
}


