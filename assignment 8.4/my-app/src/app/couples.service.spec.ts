import { TestBed, inject } from '@angular/core/testing';

import { CouplesService } from './couples.service';

describe('CouplesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouplesService]
    });
  });

  it('should be created', inject([CouplesService], (service: CouplesService) => {
    expect(service).toBeTruthy();
  }));
});
