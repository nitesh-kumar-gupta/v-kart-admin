import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Error } from 'src/app/interfaces/error';
import { User } from 'src/app/interfaces/user';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: Error;
  user: User;
  constructor(
    private title: Title,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cookieService: CookieService) {
      title.setTitle('v-kart Login');
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
      this.user = new User(success.user);
      this.cookieService.writeCookie('token', success.token, 2);
      this.router.navigateByUrl('/dashboard');
    }, (error) => {
      this.error = error.error;
    });
  }
}
