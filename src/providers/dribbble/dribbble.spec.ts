import { TestBed, inject } from '@angular/core/testing';

import { DribbbleProvider } from './dribbble';

describe('DribbbleProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DribbbleProvider]
    });
  });

  it('should be created', inject([DribbbleProvider], (service: DribbbleProvider) => {
    expect(service).toBeTruthy();
  }));
});
