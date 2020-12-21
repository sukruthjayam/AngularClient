import { TestBed } from '@angular/core/testing';

import { AuthenticatedUsersGuard } from './authenticated-users.guard';

describe('AuthenticatedUsersGuard', () => {
  let guard: AuthenticatedUsersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenticatedUsersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
