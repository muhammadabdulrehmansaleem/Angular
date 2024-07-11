import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from '../test2/test2.component';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../Employee.model';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [Test2Component, CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  employee: IEmployee[] = [];
  constructor(private _employeeservice: EmployeeService) { }
  ngOnInit() {
    this._employeeservice.getEmployee().subscribe(data => this.employee = data);
  }
  title = 'Abdulrehman testing';
  messageFromTest3: number = 211111;
}
