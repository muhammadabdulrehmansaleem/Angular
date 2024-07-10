import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test3.component.html',
  styleUrl: './test3.component.css'
})
export class Test3Component {
  bottle: string = "I am in 3rd child";
  @Input() inputFeild: string | undefined;
  @Input() appmessage: string | undefined;
  @Input() parentObject: any | undefined;
  @Input() fruits: string[] | undefined;
  isDisabled = 0;
  myClass = "myclass";
  dangerClass = true;
  isactive = false;
  hasError = false;
  greekmessage: string = "";
  showMessage() {
    this.greekmessage = "Hi i nice to meet you!!";
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
}
