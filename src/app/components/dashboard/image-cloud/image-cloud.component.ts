import { Component, OnInit } from '@angular/core';
import { Imgur } from './image-cloud-json';
import { ImageCloud } from 'src/app/interfaces/image-cloud';
import { ImageCloudService } from 'src/app/services/image-cloud.service';
declare const jQuery: any;
@Component({
  selector: 'app-image-cloud',
  templateUrl: './image-cloud.component.html',
  styleUrls: ['./image-cloud.component.css']
})
export class ImageCloudComponent implements OnInit {
  imageCloud: ImageCloud[];
  imageCloudType: Object;
  configuredImageCloud: Object[];
  constructor(private imageCloudService: ImageCloudService) {
    this.imageCloud = [Imgur];
    this.imageCloudType = null;
    this.configuredImageCloud = [];
  }
  ngOnInit() {
    this.getAllImageCloud();
  }
  configure(ic) {
    this.imageCloudType = ic;
    jQuery('#imageCloudModal').modal('show');
  }
  getAllImageCloud() {
    this.configuredImageCloud = [];
    this.imageCloudService.getAllImageCloud().subscribe((success) => {
      success.forEach((confCloud) => {
        this.configuredImageCloud.push(Object.assign({}, this.getCloudJson(confCloud.type), confCloud));
      });
    }, (error) => {
      console.error('getAllImageCloud ', error);
    });
  }

  getCloudJson(type) {
    switch (type) {
      case 'IMGUR':
        return Imgur;
      default:
        return null;
    }
  }

}
