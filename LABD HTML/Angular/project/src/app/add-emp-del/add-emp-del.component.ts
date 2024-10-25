import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-add-emp-del',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-emp-del.component.html',
  styleUrl: './add-emp-del.component.css'
})
export class AddEmpDelComponent {
  addForm : FormGroup;

  constructor(private FormBuilder: FormBuilder,
    private employeeService: EmployeeService){
      this.addForm = this.FormBuilder.group({
        id: [],
        name:[],
        salary:[]
      });
    }
      // ngOnInit(): void{
      //   this.addForm = this.FormBuilder.group({
      //     id: [],
      //     name:[],
      //     salary:[]
      //   });
      // }
    }
  



