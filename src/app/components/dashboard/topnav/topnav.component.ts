import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from './../../../interfaces/user';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit, OnDestroy {
  user?: User;
  private ngUnsubscribe: Subject<any> = new Subject();
  constructor(
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router) {
      this.user = null;
  }
  ngOnInit() {
    this.userService.getUser().pipe(takeUntil(this.ngUnsubscribe)).subscribe((user: User) => {
      this.user = user;
    });
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  logout() {
    this.cookieService.eraseCookie('token');
    this.router.navigateByUrl('/');
  }
}
