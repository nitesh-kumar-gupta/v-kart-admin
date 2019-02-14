import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCloudComponent } from './image-cloud.component';

describe('ImageCloudComponent', () => {
  let component: ImageCloudComponent;
  let fixture: ComponentFixture<ImageCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
