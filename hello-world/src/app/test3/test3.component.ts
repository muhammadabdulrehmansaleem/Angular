import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule, NgSwitchCase, NgSwitchDefault, NgSwitch } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../Employee.model';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-test3',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSwitchCase, NgSwitchDefault, NgSwitch, RouterOutlet, RouterModule,],
  templateUrl: './test3.component.html',
  styleUrl: './test3.component.css'
})
export class Test3Component {
  constructor(private _employeeservice: EmployeeService, private router: Router, private route: ActivatedRoute) {

  }
  employees: IEmployee[] = [];
  ngOnInit() {
    this._employeeservice.getEmployee().subscribe(data => this.employees = data);
  }
  bottle: string = "I am in 3rd child";
  @Input() inputFeild: string | undefined;
  @Input() appmessage: string | undefined;
  @Input() parentObject: any | undefined;
  @Input() fruits: string[] | undefined;
  isDisabled = 0;
  myClass = "myclassjasasj";
  name = "abd"
  dangerClass = true;
  isactive = false;
  hasError = false;
  greekmessage: string = "";
  islogin = true;
  showMessage() {
    this.greekmessage = "Hiii nice to meet you!!";
  }
  receiveMessage(value: any) {
    console.log(value);
  }
  @Input() username: string | undefined;
  celcius = 0;
  fahrenheit = 32;
  convertToFahrenheit() {
    this.fahrenheit = (this.celcius * 9 / 5) + 32;
  }
  handelClick() {
    this.islogin = !this.islogin;
  }
  color = "green";
  counting = [1, 2, 3, 4, 5, 6, 7, 8]
  @Output() messagefromchild = new EventEmitter();
  sendmessage() {
    this.messagefromchild.emit("This is the child's message !!");
  }
  childsendingdata: any = "";
  @Output() senderChild = new EventEmitter<any>();
  senderhandler() {
    this.senderChild.emit(this.childsendingdata);
  }
  person = {
    name: "Abdulrehman",
    location: "MMT",
    ph: "101010101"
  }
  topics = ['Angular', 'React', 'Vue']
  showUserForm() {
    this.router.navigate(['tdf'], { relativeTo: this.route })
  }
  showDepartmentsForm() {
    this.router.navigate(['rf'], { relativeTo: this.route })
  }
}

