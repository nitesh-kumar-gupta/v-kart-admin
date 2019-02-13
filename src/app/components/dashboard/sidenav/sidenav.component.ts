import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../../interfaces/user';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy {
  user: User;
  subscribes: any[];
  constructor(
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router) {
      this.user = null;
  }
  ngOnInit() {
    this.retriveUser();
  }
  ngOnDestroy() {
    this.subscribes.forEach((subscribe) => {
      subscribe.unsubscribe();
    });
  }
  retriveUser() {
    this.subscribes.push(this.userService.retriveUser().subscribe((success: User) => {
      this.userService.setUser(success);
      this.user = success;
    }, (error) => {
      if (error.err_message === 'Session expired please re-login.') {
        this.cookieService.eraseCookie('token');
        this.router.navigateByUrl('/');
      }
    }));
  }

}
