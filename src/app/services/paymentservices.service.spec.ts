import { TestBed, inject } from '@angular/core/testing';

import { PaymentservicesService } from './paymentservices.service';

describe('PaymentservicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentservicesService]
    });
  });

  it('should be created', inject([PaymentservicesService], (service: PaymentservicesService) => {
    expect(service).toBeTruthy();
  }));
});
