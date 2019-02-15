import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageCloudService } from 'src/app/services/image-cloud.service';
import { CookieService } from 'src/app/services/cookie.service';
import { ToastService } from 'src/app/services/toast.service';
declare const jQuery: any;
@Component({
  selector: 'app-image-cloud-modal',
  templateUrl: './image-cloud-modal.component.html',
  styleUrls: ['./image-cloud-modal.component.css']
})
export class ImageCloudModalComponent implements OnInit {
  @Input() imageCloudType;
  @Output() newSetup = new EventEmitter<string>();
  constructor(private imageCloudService: ImageCloudService,
    private cookieService: CookieService,
    private toastService: ToastService) { }
  ngOnInit() {
  }
  authorize() {
    this.imageCloudService.getAuthLink(this.imageCloudType.name).subscribe((success: any) => {
        this.openOauthDialog(success);
    }, (error: any) => {
        console.error('authorize error: ', error);
    });
  }
  openOauthDialog(response?: any) {
    console.log(response);
    this.cookieService.writeCookie('imagecloud', 'initilized', 1);
    const newWindow = window.open(response, 'GoogleWindow', 'width=600, height=500,scrollbars=yes');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // jQuery('#popup-block').modal('show');
    }
    const interval = setInterval(() => {
      const cookie = this.cookieService.readCookie('imagecloud');
      if (cookie === 'success') {
        if (newWindow) {
          newWindow.close();
          jQuery('#imageCloudModal').modal('hide');
          this.newSetup.next('');
          this.toastService.toastSuccess(`${this.imageCloudType.displayName} connected`, 2);
        }
        clearInterval(interval);
      } else if (cookie === null) {
        clearInterval(interval);
      }
    }, 5000);
  }
}
