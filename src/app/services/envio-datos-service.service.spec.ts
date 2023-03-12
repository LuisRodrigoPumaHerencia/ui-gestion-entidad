import { TestBed } from '@angular/core/testing';

import { EnvioDatosServiceService } from './envio-datos-service.service';

describe('EnvioDatosServiceService', () => {
  let service: EnvioDatosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioDatosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
