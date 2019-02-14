import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCloudComponent } from './image-cloud.component';
import { ImageCloudModalComponent } from './image-cloud-modal/image-cloud-modal.component';

@NgModule({
  declarations: [ImageCloudComponent, ImageCloudModalComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageCloudComponent]
})
export class ImageCloudModule { }
