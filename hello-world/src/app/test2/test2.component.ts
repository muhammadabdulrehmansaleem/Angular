import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-test2',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.css'
})
export class Test2Component {
  counter: number = 0;
  @Input() message: number | undefined;
  testmessage: string = "Test2 is giving this message";
  increment() {
    this.counter++;
  }
  reset() {
    this.counter = 0;
  }
}
