import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEmployee } from '../Employee.model';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  public empId = 0;
  employees: IEmployee[] = [];
  constructor(private _employeeservice: EmployeeService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this._employeeservice.getEmployee().subscribe(data => this.employees = data, error => console.log(error));
    this.route.paramMap.subscribe((param: ParamMap) => {
      let te = param.get('id');
      if (te != null) {
        this.empId = parseInt(te);
      }
    })
  }
  onSelect(employee: any) {
    this.router.navigate(['/employee', employee.id]);
  }
  isSelected(employee: IEmployee) {
    return this.empId === employee.id;
  }
}
