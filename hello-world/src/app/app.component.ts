import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test3Component } from './test3/test3.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, Test3Component, FormsModule],
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
}
