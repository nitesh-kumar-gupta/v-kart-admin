import { Component, OnInit } from '@angular/core';
import { Imgur } from './image-cloud-json';
import { ImageCloud } from 'src/app/interfaces/image-cloud';
declare const jQuery: any;
@Component({
  selector: 'app-image-cloud',
  templateUrl: './image-cloud.component.html',
  styleUrls: ['./image-cloud.component.css']
})
export class ImageCloudComponent implements OnInit {
  imageCloud: ImageCloud[];
  imageCloudType: ImageCloud;
  constructor() {
    this.imageCloud = [Imgur];
    this.imageCloudType = null;
  }

  ngOnInit() {
  }

  configure(ic) {
    this.imageCloudType = ic;
    jQuery('#imageCloudModal').modal('show');
  }
}
