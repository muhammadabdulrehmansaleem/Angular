import { Injectable } from '@angular/core';
import { Employee } from './Employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getEmployee(): Employee[] {
    return [
      { "name": "Abdulrehman", "location": "skt" },
      { "name": "Abubakkar", "location": "skt" },
      { "name": "Umar", "location": "skt" }
    ];
  }
}
