import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-reactiveforms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css'
})
export class ReactiveformsComponent {
  registrationForm = new FormGroup({
    username: new FormControl('Abdulrehman'),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl('')
    })
  });
  loadApiData() {
    this.registrationForm.patchValue({
      username: 'Bakkar',
      password: '1234',
      confirmpassword: '1234'
    })
  }
}
