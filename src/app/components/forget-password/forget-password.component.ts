import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Title } from '@angular/platform-browser';
import { EmailValidator } from './../../validators/email.validator';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit, OnDestroy {
  forgetForm: FormGroup;
  error: Error;
  subscribes: any[];
  constructor(
    private title: Title,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.subscribes = [];
    title.setTitle('v-kart Forget password');
  }
  ngOnInit() {
    this.initForgetForm();
  }
  ngOnDestroy() {
    this.subscribes.forEach((subscribe) => {
      subscribe.unsubscribe();
    });
  }
  initForgetForm() {
    this.forgetForm = new FormGroup({
      email: new FormControl(null, [Validators.required, EmailValidator.format])
    });
  }
  resetPassword() {
    this.error = null;
    if (this.forgetForm.valid) {
      this.subscribes.push(this.userService.resetPassword(this.forgetForm.value).subscribe((success) => {
      }, (error) => {
        this.error = error.error;
      }));
    }
  }
}
