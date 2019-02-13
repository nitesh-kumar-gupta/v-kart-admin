import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../../interfaces/user';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit, OnDestroy {
  user?: User;
  subscribes: any[];
  constructor(
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router) {
      this.user = null;
      this.subscribes = [];
  }
  ngOnInit() {
    this.subscribes.push(this.userService.getUser().subscribe((user: User) => {
      this.user = user;
    }));
  }
  ngOnDestroy() {
    this.subscribes.forEach((subscribe) => {
      subscribe.unsubscribe();
    });
  }
  logout() {
    this.cookieService.eraseCookie('token');
    this.router.navigateByUrl('/');
  }
}
