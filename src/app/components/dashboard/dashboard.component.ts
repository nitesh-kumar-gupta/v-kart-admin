import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private title: Title,
    private cookieService: CookieService,
    private router: Router) {
    title.setTitle('v-kart Dashboard');
  }

  ngOnInit() {
  }

  logout() {
    this.cookieService.eraseCookie('token');
    this.router.navigateByUrl('/');
  }
}
