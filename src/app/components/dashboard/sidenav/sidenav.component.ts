import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../../interfaces/user';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  protected user: User;
  constructor(
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router) {
      this.user = null;
    }

  ngOnInit() {
    this.retriveUser();
  }
  retriveUser() {
    this.userService.retriveUser().subscribe((success: User) => {
      this.userService.setUser(success);
      this.user = success;
    }, (error) => {
      if (error.err_message === 'Session expired please re-login.') {
        this.cookieService.eraseCookie('token');
        this.router.navigateByUrl('/');
      }
    });
  }

}
