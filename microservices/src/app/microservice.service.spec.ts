import { TestBed, inject } from '@angular/core/testing';

import { MicroserviceService } from './microservice.service';

describe('MicroserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MicroserviceService]
    });
  });

  it('should be created', inject([MicroserviceService], (service: MicroserviceService) => {
    expect(service).toBeTruthy();
  }));
});
