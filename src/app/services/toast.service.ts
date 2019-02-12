import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastrService: ToastrService) {
  }
  toastSuccess(message, delay) {
    this.toastrService.success(`<i class="fa fa-check-circle" aria-hidden="true"></i> ${message}`, '', {
      timeOut: (delay * 1000),
      extendedTimeOut: 1000,
      enableHtml: true
    });
  }
  toastInfo(message, delay) {
    this.toastrService.info(`<i class="fa fa-info-circle" aria-hidden="true"></i> ${message}`, '', {
      timeOut: (delay * 1000),
      extendedTimeOut: 1000,
      enableHtml: true
    });
  }
  toastWarning(message, delay) {
    this.toastrService.warning(`<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ${message}`, '', {
      timeOut: (delay * 1000),
      extendedTimeOut: 1000,
      enableHtml: true
    });
  }
  toastError(message, delay) {
    this.toastrService.error(`<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ${message}`, '', {
      timeOut: (delay * 1000),
      extendedTimeOut: 1000,
      enableHtml: true
    });
  }
}
