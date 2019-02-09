import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../../interfaces/user';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  protected user?: User;
  constructor(
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router) {
      this.user = null;
    }

  ngOnInit() {
    this.userService.getUser().subscribe((user: User) => {
      this.user = user;
    });
  }
  logout() {
    this.cookieService.eraseCookie('token');
    this.router.navigateByUrl('/');
  }
}
