import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Error } from 'src/app/interfaces/error';
import { User } from 'src/app/interfaces/user';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  error: Error;
  user: User;
  private ngUnsubscribe: Subject<any> = new Subject();
  constructor(
    private title: Title,
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService) {
      this.title.setTitle('v-kart Login');
  }
  ngOnInit() {
    this.initLoginForm();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  initLoginForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }
  login() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).pipe(takeUntil(this.ngUnsubscribe)).subscribe((success) => {
        this.cookieService.writeCookie('token', success.token, 2);
        this.router.navigateByUrl('/dashboard');
      }, (error) => {
        this.error = error;
      });

    }
  }
}
