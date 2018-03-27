import { TestBed, inject } from '@angular/core/testing';

import { ClientFetchService } from './client-fetch.service';

describe('ClientFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientFetchService]
    });
  });

  it('should be created', inject([ClientFetchService], (service: ClientFetchService) => {
    expect(service).toBeTruthy();
  }));
});
