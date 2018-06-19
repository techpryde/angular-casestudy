import { TestBed, inject } from '@angular/core/testing';

import { AuthhandlerService } from './authhandler.service';

describe('AuthhandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthhandlerService]
    });
  });

  it('should be created', inject([AuthhandlerService], (service: AuthhandlerService) => {
    expect(service).toBeTruthy();
  }));
});
