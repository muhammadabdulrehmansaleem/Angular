import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgSwitchCase, NgSwitchDefault, NgSwitch } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { error } from 'console';
@Component({
  selector: 'app-tdf',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterModule],
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css'
})
export class TDFComponent {
  constructor(private userservice: UserServiceService) { }
  topics = ['Angular', 'React', 'Vue']
  userModel = new User("abdulrehman", "abd@gmail", 101010, "Angular");
  submitted = false;
  errorMsg = "";
  onSubmit() {
    this.submitted = true;
    this.userservice.enroll(this.userModel).subscribe(data => console.log('success', data),
      error => this.errorMsg = error.statusText);
  }
}
