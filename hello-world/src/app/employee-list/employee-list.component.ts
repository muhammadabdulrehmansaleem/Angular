import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEmployee } from '../Employee.model';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employees: IEmployee[] = [];
  constructor(private _employeeservice: EmployeeService) { }
  ngOnInit() {
    this._employeeservice.getEmployee().subscribe(data => this.employees = data, error => console.log(error));
  }
}
