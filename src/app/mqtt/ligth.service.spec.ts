import { TestBed, inject } from '@angular/core/testing';

import { LigthService } from './ligth.service';

describe('LigthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LigthService]
    });
  });

  it('should be created', inject([LigthService], (service: LigthService) => {
    expect(service).toBeTruthy();
  }));
});
