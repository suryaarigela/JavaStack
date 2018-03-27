import { TestBed, inject } from '@angular/core/testing';

import { BusSearchService } from './bus-search.service';

describe('BusSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusSearchService]
    });
  });

  it('should be created', inject([BusSearchService], (service: BusSearchService) => {
    expect(service).toBeTruthy();
  }));
});
