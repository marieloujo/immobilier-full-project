import { TestBed } from '@angular/core/testing';

import { IllustrationService } from './illustration.service';

describe('IllustrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IllustrationService = TestBed.get(IllustrationService);
    expect(service).toBeTruthy();
  });
});
