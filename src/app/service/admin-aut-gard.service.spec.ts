import { TestBed } from '@angular/core/testing';

import { AdminAutGardService } from './admin-aut-gard.service';

describe('AdminAutGardService', () => {
  let service: AdminAutGardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAutGardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
