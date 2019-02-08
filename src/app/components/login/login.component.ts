import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  login() {
    const credentials = {
      username: '1234',
      password: '1234'
    };
    this.userService.login(credentials).subscribe((success) => {
      console.log('loginSuccess: ', success);
    }, (error) => {
      console.error('loginError: ', error);
    });
  }
}
