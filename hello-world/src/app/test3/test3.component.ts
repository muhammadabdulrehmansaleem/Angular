import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-test3',
  standalone: true,
  imports: [],
  templateUrl: './test3.component.html',
  styleUrl: './test3.component.css'
})
export class Test3Component {
  bottle: string = "I am in 3rd child";
  @Input() inputFeild: string | undefined;
  isDisabled = 0;
  myClass = "myclass";
  dangerClass = true;
}
