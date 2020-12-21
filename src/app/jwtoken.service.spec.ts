import { TestBed } from '@angular/core/testing';

import { JWTokenService } from './jwtoken.service';

describe('JWTokenService', () => {
  let service: JWTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JWTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
