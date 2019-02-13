import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Title } from '@angular/platform-browser';
import { EmailValidator } from './../../validators/email.validator';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {
  forgetForm: FormGroup;
  error: Error;
  private ngUnsubscribe: Subject<any> = new Subject();
  constructor(
    private title: Title,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    title.setTitle('v-kart Forget password');
  }
  ngOnInit() {
    this.initForgetForm();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  initForgetForm() {
    this.forgetForm = new FormGroup({
      email: new FormControl(null, [Validators.required, EmailValidator.format])
    });
  }
  resetPassword() {
    this.error = null;
    if (this.forgetForm.valid) {
      this.userService.resetPassword(this.forgetForm.value).pipe(takeUntil(this.ngUnsubscribe)).subscribe((success) => {
      }, (error) => {
        this.error = error.error;
      });
    }
  }
}
