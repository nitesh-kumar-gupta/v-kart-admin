import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/services/cookie.service';
import { ImageCloudService } from 'src/app/services/image-cloud.service';
import { Error } from 'src/app/interfaces/error';
@Component({
  selector: 'app-redirect-uri',
  templateUrl: './redirect-uri.component.html',
  styleUrls: ['./redirect-uri.component.css']
})
export class RedirectUriComponent implements OnInit {
  storageType: string;
  error: Error;
  constructor(public cookieService: CookieService, private imageCloudService: ImageCloudService) {
    this.storageType = null;
  }
  ngOnInit() {
    const path = window.location.pathname;
    this.storageType = path.split('/')[2];
    this.getAuthorizationCodes();
  }
  getAuthorizationCodes() {
    const data = {};
    const queryString = location.hash.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;
    while (m = regex.exec(queryString)) {
      data[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    this.imageCloudService.create(data, this.storageType).subscribe((success) => {
      this.cookieService.writeCookie('imagecloud', 'success', 1);
    }, (error) => {
      this.error = error;
      this.cookieService.eraseCookie('imagecloud');
    });
  }
  close() {
    window.close();
  }
}
