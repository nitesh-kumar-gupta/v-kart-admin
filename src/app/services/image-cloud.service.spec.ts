import { TestBed } from '@angular/core/testing';

import { ImageCloudService } from './image-cloud.service';

describe('ImageCloudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageCloudService = TestBed.get(ImageCloudService);
    expect(service).toBeTruthy();
  });
});
