import { TestBed } from '@angular/core/testing';

import { ConnectionFirebaseService } from './connection-firebase.service';

describe('ConnectionFirebaseService', () => {
  let service: ConnectionFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectionFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
