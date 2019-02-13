import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./../../../assets/css/sb-admin-2.min.css', './dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewInit {
  constructor(private title: Title) {
    title.setTitle('v-kart Dashboard');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
