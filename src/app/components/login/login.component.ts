import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Error } from 'src/app/interfaces/error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: Error;
  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.initLoginForm();
  }
  initLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  login() {
    this.userService.login(this.loginForm.value).subscribe((success) => {
      console.log('loginSuccess: ', success);
    }, (error) => {
      this.error = error.error;
      console.error('loginError: ', this.error);
    });
  }
}
