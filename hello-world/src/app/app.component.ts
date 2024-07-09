import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test3Component } from './test3/test3.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, Test3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
  appCompData: string = "This is the data i am passing from app component!!";
}
