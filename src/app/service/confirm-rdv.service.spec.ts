import { TestBed } from '@angular/core/testing';

import { ConfirmRDVService } from './confirm-rdv.service';

describe('ConfirmRDVService', () => {
  let service: ConfirmRDVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmRDVService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
