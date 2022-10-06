import { TestBed } from '@angular/core/testing';

import { VivoservicesService } from './vivoservices.service';

describe('VivoservicesService', () => {
  let service: VivoservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VivoservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
