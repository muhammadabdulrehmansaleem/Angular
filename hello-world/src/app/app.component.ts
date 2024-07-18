import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test3Component } from './test3/test3.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { MainComponent } from './main/main.component';
import { Test2Component } from './test2/test2.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, TestComponent, Test3Component, FormsModule, MainComponent, Test2Component],
  providers: [EmployeeService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
  appCompData: string = "This is the data i am passing from app component!!";
  appmessage: string = "I am app and sending this message from parent to child";
  personObject = {
    name: "Abdulrehman",
    city: "Shahkot",
    ph: 123
  }
  fruitArray = ["apple", "mango", "banana"]
  username: string = "";
  childmess: string = "";
  childrenmessage: any = ""
  constructor(private route: ActivatedRoute) { }
}
