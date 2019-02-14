import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCloudModalComponent } from './image-cloud-modal.component';

describe('ImageCloudModalComponent', () => {
  let component: ImageCloudModalComponent;
  let fixture: ComponentFixture<ImageCloudModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCloudModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCloudModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
