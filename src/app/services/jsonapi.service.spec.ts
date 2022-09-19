import { TestBed } from '@angular/core/testing';

import { JSONapiService } from './jsonapi.service';

describe('JSONapiService', () => {
  let service: JSONapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
