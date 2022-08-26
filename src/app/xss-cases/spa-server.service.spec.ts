import { TestBed } from '@angular/core/testing';

import { SpaServerService } from './spa-server.service';

describe('SpaServerService', () => {
  let service: SpaServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
